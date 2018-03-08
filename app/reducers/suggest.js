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

const handleCastCharity = (prevState, action) => {
  if (action.old) {
    return prevState;
  }

  const newState = getNewState(prevState);
  const { caster, charityIndex, score } = action.castCharity;
  // update charity data
  const charity = newState.charities[charityIndex];
  charity.totalScores.plus(score);
  charity.totalVotes.plus(1);
  // add our votes to our votes
  if (caster === newState.account) {
    newState.votes[charityIndex] = score;
  }

  return newState;
};

const handleCastSuggest = (prevState, action) => {
  if (action.old) {
    return prevState;
  }

  const newState = getNewState(prevState);
  const { caster, charityIndex, charityName, score } = action.castSuggest;
  // add new charity
  newState.charities[charityIndex] = {
    name: charityName,
    caster,
    totalScores: score,
    totalVotes: 1
  };

  // add our votes to our votes
  if (caster === newState.account) {
    newState.votes[charityIndex] = score;
  }

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
    case 'SUGGEST_CASTCHARITY':
      return handleCastCharity(prevState, action);
    case 'SUGGEST_CASTSUGGEST':
      return handleCastSuggest(prevState, action);
    default:
      return prevState;
  }
};

export default suggestReducer;
