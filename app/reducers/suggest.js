const getNewState = (prevState) => {
  return { ...prevState };
};

const handleStatus = (prevState, action) => {
  const newState = getNewState(prevState);
  newState.status = action.status;
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
    charityIndex,
    score,
    totalScores,
    totalVotes,
    hasVoted
  } = action.castIndex;
  const newState = getNewState(prevState);
  newState.isLoading = false;
  // update charity data
  const charity = newState.charities[charityIndex];
  charity.totalScores = totalScores;
  charity.totalVotes = totalVotes;
  charity.averageScore = charity.totalScores.div(charity.totalVotes);
  // add our votes to our votes
  if (caster === newState.account) {
    newState.status.hasVoted = hasVoted;
    // delete existing vote?
    if (score > 0) {
      newState.votes[charityIndex] = score;
    } else {
      delete newState.votes[charityIndex];
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
    newState.status.hasVoted = true;
  }

  return newState;
};

const handleSeedomParticipation = (prevState, action) => {
  if (action.old || (action.participation.participant !== prevState.account)) {
    return prevState;
  }

  const newState = getNewState(prevState);
  newState.status.hasRight = true;
  return newState;
};

const suggestReducer = (prevState = {}, action) => {
  switch (action.type) {
    case 'SUGGEST_STATUS':
      return handleStatus(prevState, action);
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
