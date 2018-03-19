import { zero } from '../utils/numbers';

const getNewState = (prevState) => {
  return { ...prevState };
};

const handleCaster = (prevState, action) => {
  const newState = getNewState(prevState);
  newState.caster = action.caster;
  return newState;
};

const handleCharities = (prevState, action) => {
  const newState = getNewState(prevState);
  newState.charities = action.charities;
  return newState;
};

const handleVotes = (prevState, action) => {
  const newState = getNewState(prevState);
  newState.votes = action.votes;
  return newState;
};

const handleCastIndex = (prevState, action) => {
  if (action.old) {
    return prevState;
  }

  const {
    caster,
    score,
    totalVotes,
    charityIndex,
    charityTotalScores,
    charityTotalVotes
  } = action.castIndex;
  const newState = getNewState(prevState);
  // update is loading
  newState.isLoading = false;
  // update charity data
  const charity = newState.charities[charityIndex];
  charity.totalScores = charityTotalScores;
  charity.totalVotes = charityTotalVotes;
  // update average score
  charity.averageScore = charityTotalVotes.isGreaterThan(0)
    ? charityTotalScores.div(charityTotalVotes)
    : zero();
  // add our votes to our votes
  if (caster === newState.account) {
    newState.caster.totalVotes = totalVotes;
    // delete existing vote if we did not cast the charity (name)
    if ((score === 0) && (charity.caster !== newState.account)) {
      delete newState.votes[charityIndex];
    } else {
      newState.votes[charityIndex] = score;
    }
  }

  return newState;
};

const handleCastName = (prevState, action) => {
  if (action.old) {
    return prevState;
  }

  const newState = getNewState(prevState);
  newState.isLoading = false;
  const { caster, charityIndex, charityName, score } = action.castName;
  // add new charity
  newState.charities[charityIndex] = {
    name: charityName,
    caster,
    totalScores: score,
    totalVotes: 1,
    averageScore: score
  };

  // add our votes to our votes
  if (caster === newState.account) {
    newState.votes[charityIndex] = score;
    newState.caster.totalVotes = newState.caster.totalVotes.plus(1);
  }

  return newState;
};

const handleSeedomParticipation = (prevState, action) => {
  if (action.old || (action.participation.participant !== prevState.account)) {
    return prevState;
  }

  const newState = getNewState(prevState);
  newState.caster.maxVotes = newState.caster.maxVotes.plus(1);
  return newState;
};

const suggestReducer = (prevState = {}, action) => {
  switch (action.type) {
    case 'SUGGEST_CASTER':
      return handleCaster(prevState, action);
    case 'SUGGEST_CHARITIES':
      return handleCharities(prevState, action);
    case 'SUGGEST_VOTES':
      return handleVotes(prevState, action);
    case 'SUGGEST_CASTINDEX':
      return handleCastIndex(prevState, action);
    case 'SUGGEST_CASTNAME':
      return handleCastName(prevState, action);
    case 'SEEDOM_PARTICIPATION':
      return handleSeedomParticipation(prevState, action);
    default:
      return prevState;
  }
};

export default suggestReducer;
