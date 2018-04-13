import { zero } from '../utils/numbers';

const getNewState = (prevState) => {
  return { ...prevState };
};

const handleCaster = (prevState, action) => {
  const newState = getNewState(prevState);
  newState.caster = action.caster;
  return newState;
};

const handleCauses = (prevState, action) => {
  const newState = getNewState(prevState);
  newState.causes = action.causes;
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
    votes,
    causeIndex,
    causeScores,
    causeVotes
  } = action.castIndex;
  const newState = getNewState(prevState);
  // update is loading
  newState.isLoading = false;
  // update cause data
  const cause = newState.causes[causeIndex];
  cause.scores = causeScores;
  cause.votes = causeVotes;
  // update average score
  cause.averageScore = causeVotes.isGreaterThan(0)
    ? causeScores.div(causeVotes)
    : zero();
  // add our votes to our votes
  if (caster === newState.account) {
    newState.caster.votes = votes;
    // delete existing vote if we did not cast the cause (name)
    if ((score === 0) && (cause.caster !== newState.account)) {
      delete newState.votes[causeIndex];
    } else {
      newState.votes[causeIndex] = score;
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
  const { caster, causeIndex, causeName, score } = action.castName;
  // add new cause
  newState.causes[causeIndex] = {
    index: causeIndex,
    name: causeName,
    caster,
    scores: score,
    votes: 1,
    averageScore: score
  };

  // add our votes to our votes
  if (caster === newState.account) {
    newState.votes[causeIndex] = score;
    newState.caster.votes = newState.caster.votes.plus(1);
  }

  return newState;
};

const handleFundraiserParticipation = (prevState, action) => {
  if (action.old || (action.participation.participant !== prevState.account)) {
    return prevState;
  }

  const newState = getNewState(prevState);
  newState.caster.maxVotes = newState.caster.maxVotes.plus(1);
  return newState;
};

const pollingReducer = (prevState = {}, action) => {
  switch (action.type) {
    case 'POLLING_CASTER':
      return handleCaster(prevState, action);
    case 'POLLING_CAUSES':
      return handleCauses(prevState, action);
    case 'POLLING_VOTES':
      return handleVotes(prevState, action);
    case 'POLLING_CASTINDEX':
      return handleCastIndex(prevState, action);
    case 'POLLING_CASTNAME':
      return handleCastName(prevState, action);
    case 'FUNDRAISER_PARTICIPATION':
      return handleFundraiserParticipation(prevState, action);
    default:
      return prevState;
  }
};

export default pollingReducer;
