const MAX_FEED_ITEMS = 20;

const getNewState = (prevState) => {
  const newState = { ...prevState };
  if (!('feed' in prevState)) {
    newState.feed = [];
  }
  return newState;
};

const updateFeed = (feed, action) => {
  const newFeed = feed.slice(0, MAX_FEED_ITEMS);
  newFeed.unshift(action);
  return newFeed;
};

const handleRaiser = (prevState, action) => {
  const newState = getNewState(prevState);
  newState.raiser = action.raiser;
  return newState;
};

const handleState = (prevState, action) => {
  const newState = getNewState(prevState);
  newState.state = action.state;
  return newState;
};

const handleParticipant = (prevState, action) => {
  const newState = getNewState(prevState);
  newState.participant = action.participant;
  return newState;
};

const handleBalances = (prevState, action) => {
  const newState = getNewState(prevState);
  newState.balances = action.balances;
  return newState;
};

const handleSeed = (prevState, action) => {
  if (action.old) {
    return prevState;
  }

  const newState = getNewState(prevState);
  newState.state.charitySecret = action.seed.charitySecret;
  return newState;
};

const handleParticipation = (prevState, action) => {
  const newState = getNewState(prevState);
  if (action.old) {
    newState.feed = updateFeed(newState.feed, action);
  } else {
    newState.state.totalParticipants = newState.state.totalParticipants.plus(1);
    newState.state.totalEntries = newState.state.totalEntries.plus(action.participation.entries);
    newState.feed = updateFeed(newState.feed, action);

    if (action.participation.participant === newState.account) {
      newState.isLoading = false;
      newState.participant.entries = action.participation.entries;
      newState.participant.message = action.participation.message;
    }
  }

  return newState;
};

const handleRaise = (prevState, action) => {
  const newState = getNewState(prevState);
  if (action.old) {
    newState.feed = updateFeed(newState.feed, action);
  } else {
    newState.state.totalEntries = newState.state.totalEntries.plus(action.raise.entries);
    newState.feed = updateFeed(newState.feed, action);

    if (action.raise.participant === newState.account) {
      newState.isLoading = false;
      newState.participant.entries = newState.participant.entries.plus(action.raise.entries);
    }
  }

  return newState;
};

const handleRevelation = (prevState, action) => {
  if (action.old) {
    return prevState;
  }

  const newState = getNewState(prevState);
  newState.state.charityMessage = action.revelation.charityMessage;
  return newState;
};

const handleSelection = (prevState, action) => {
  if (action.old) {
    return prevState;
  }

  const newState = getNewState(prevState);
  newState.state.selected = action.selection.selected;
  newState.state.selectedMessage = action.selection.selectedMessage;
  newState.state.charityMessage = action.selection.charityMessage;
  newState.state.ownerMessage = action.selection.ownerMessage;

  // update selected balance
  if (action.selection.selected === newState.account) {
    const { raiser, state, primaryContractAddresses } = newState;
    newState.balances[primaryContractAddresses.seedom] =
      state.totalEntries.times(raiser.selectedSplit).dividedBy(1000).times(raiser.valuePerEntry);
  }

  return newState;
};

const handleCancellation = (prevState, action) => {
  if (action.old) {
    return prevState;
  }

  const newState = getNewState(prevState);
  newState.isLoading = false;
  newState.state.cancelled = true;

  // update our cancellation balance
  const { raiser, participant, primaryContractAddresses } = newState;
  newState.balances[primaryContractAddresses.seedom] =
    participant.entries.times(raiser.valuePerEntry);

  return newState;
};

const handleWithdrawal = (prevState, action) => {
  if (action.old) {
    return prevState;
  }

  const newState = getNewState(prevState);
  // set our balance to zero if we withdrew
  if (action.withdrawal.address === newState.account) {
    newState.isLoading = false;
    delete newState.balances[action.contractAddress];
  }
  return newState;
};

const seedomReducer = (prevState = {}, action) => {
  switch (action.type) {
    case 'SEEDOM_RAISER':
      return handleRaiser(prevState, action);
    case 'SEEDOM_STATE':
      return handleState(prevState, action);
    case 'SEEDOM_PARTICIPANT':
      return handleParticipant(prevState, action);
    case 'SEEDOM_BALANCES':
      return handleBalances(prevState, action);
    case 'SEEDOM_SEED':
      return handleSeed(prevState, action);
    case 'SEEDOM_PARTICIPATION':
      return handleParticipation(prevState, action);
    case 'SEEDOM_RAISE':
      return handleRaise(prevState, action);
    case 'SEEDOM_REVELATION':
      return handleRevelation(prevState, action);
    case 'SEEDOM_SELECTION':
      return handleSelection(prevState, action);
    case 'SEEDOM_CANCELLATION':
      return handleCancellation(prevState);
    case 'SEEDOM_WITHDRAWAL':
      return handleWithdrawal(prevState, action);
    default:
      return prevState;
  }
};

export default seedomReducer;
