const MAX_FEED_ITEMS = 20;

const getNewState = (prevState) => {
  return { ...prevState };
};

const updateFeed = (feed, action) => {
  const newFeed = feed ? feed.slice(0, MAX_FEED_ITEMS) : [];
  newFeed.unshift(action);
  return newFeed;
};

const handleDeployments = (prevState, action) => {
  const newState = getNewState(prevState);
  newState.deployments = action.deployments;
  return newState;
};

const handleStates = (prevState, action) => {
  const newState = getNewState(prevState);
  newState.states = action.states;
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

const handleBeginning = (prevState, action) => {
  if (action.old) {
    return prevState;
  }

  const newState = getNewState(prevState);
  const { primaryContractAddresses } = newState;
  const newStateState = newState.states[primaryContractAddresses.fundraiser];
  newStateState.causeSecret = action.beginning.causeSecret;
  return newState;
};

const handleParticipation = (prevState, action) => {
  const newState = getNewState(prevState);
  if (action.old) {
    newState.feed = updateFeed(newState.feed, action);
  } else {
    const { primaryContractAddresses } = newState;
    const newStateState = newState.states[primaryContractAddresses.fundraiser];
    newStateState.participants = newStateState.participants.plus(1);
    newStateState.entries = newStateState.entries.plus(action.participation.entries);
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
    const { primaryContractAddresses } = newState;
    const newStateState = newState.states[primaryContractAddresses.fundraiser];
    newStateState.entries = newStateState.entries.plus(action.raise.entries);
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
  const { primaryContractAddresses } = newState;
  const newStateState = newState.states[primaryContractAddresses.fundraiser];
  newStateState.causeMessage = action.revelation.causeMessage;
  return newState;
};

const handleSelection = (prevState, action) => {
  if (action.old) {
    return prevState;
  }

  const newState = getNewState(prevState);
  const { primaryContractAddresses } = newState;
  const newStateState = newState.states[primaryContractAddresses.fundraiser];
  newStateState.participant = action.selection.participant;
  newStateState.participantMessage = action.selection.participantMessage;
  newStateState.causeMessage = action.selection.causeMessage;
  newStateState.ownerMessage = action.selection.ownerMessage;

  // update participant balance
  if (action.selection.participant === newState.account) {
    const { deployment, state } = newState;
    newState.balances[primaryContractAddresses.fundraiser] =
      state.entries.times(deployment.participantSplit).dividedBy(1000).times(deployment.valuePerEntry);
  }

  return newState;
};

const handleCancellation = (prevState, action) => {
  if (action.old) {
    return prevState;
  }

  const newState = getNewState(prevState);
  const { primaryContractAddresses } = newState;
  const newStateState = newState.states[primaryContractAddresses.fundraiser];
  newState.isLoading = false;
  newStateState.cancelled = true;

  // update our cancellation balance
  const { deployment, participant } = newState;
  newState.balances[primaryContractAddresses.fundraiser] =
    participant.entries.times(deployment.valuePerEntry);

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

const fundraiserReducer = (prevState = null, action) => {
  switch (action.type) {
    case 'FUNDRAISER_DEPLOYMENTS':
      return handleDeployments(prevState, action);
    case 'FUNDRAISER_STATES':
      return handleStates(prevState, action);
    case 'FUNDRAISER_PARTICIPANT':
      return handleParticipant(prevState, action);
    case 'FUNDRAISER_BALANCES':
      return handleBalances(prevState, action);
    case 'FUNDRAISER_BEGINNING':
      return handleBeginning(prevState, action);
    case 'FUNDRAISER_PARTICIPATION':
      return handleParticipation(prevState, action);
    case 'FUNDRAISER_RAISE':
      return handleRaise(prevState, action);
    case 'FUNDRAISER_REVELATION':
      return handleRevelation(prevState, action);
    case 'FUNDRAISER_SELECTION':
      return handleSelection(prevState, action);
    case 'FUNDRAISER_CANCELLATION':
      return handleCancellation(prevState);
    case 'FUNDRAISER_WITHDRAWAL':
      return handleWithdrawal(prevState, action);
    default:
      return prevState;
  }
};

export default fundraiserReducer;
