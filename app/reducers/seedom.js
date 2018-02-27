const MAX_FEED_ITEMS = 20;

const updateFeed = (feed, action) => {
  const newFeed = feed.slice(0, MAX_FEED_ITEMS);
  newFeed.unshift(action);
  return newFeed;
};

const handleSeedEvent = (prevState, action) => {
  const newState = { ...prevState };
  newState.state.charitySecret = action.seed.charitySecret;
  return newState;
};

const handleParticipationEvent = (prevState, action) => {
  const newState = { ...prevState };
  newState.state.totalParticipants = newState.state.totalParticipants.plus(1);
  newState.state.totalEntries = newState.state.totalEntries.plus(action.participation.entries);
  newState.feed = updateFeed(newState.feed, action);

  if (action.data.participant === newState.account) {
    newState.isLoading.isParticipating = false;
    newState.participant.entries = action.participation.entries;
    newState.participant.message = action.participation.message;
  }

  return newState;
};

const handleRaiseEvent = (prevState, action) => {
  const newState = { ...prevState };
  newState.state.totalEntries = newState.state.totalEntries.plus(action.raise.entries);
  newState.feed = updateFeed(newState.feed, action);

  if (action.raise.participant === newState.account) {
    newState.isLoading.isRaising = false;
    newState.participant.entries = newState.participant.entries.plus(action.raise.entries);
  }

  return newState;
};

const handleRevelationEvent = (prevState, action) => {
  const newState = { ...prevState };
  newState.state.charityMessage = action.revelation.charityMessage;
  return newState;
};

const handleSelectionEvent = (prevState, action) => {
  const newState = { ...prevState };
  newState.state.selected = action.selection.selected;
  newState.state.selectedMessage = action.selection.selectedMessage;
  newState.state.charityMessage = action.selection.charityMessage;
  newState.state.ownerMessage = action.selection.ownerMessage;

  // update selected balance
  if (action.selection.selected === newState.account) {
    const { raiser, state, primaryContractAddresses } = newState;
    newState.balances[primaryContractAddresses.seedom] =
      state.totalEntries.times(raiser.winnerSplit).dividedBy(1000).times(raiser.valuePerEntry);
  }

  return newState;
};

const handleCancellationEvent = (prevState) => {
  const newState = { ...prevState };
  newState.isLoading.isCancelling = false;
  newState.state.cancelled = true;

  // update our cancellation balance
  const { raiser, participant, primaryContractAddresses } = newState;
  newState.balances[primaryContractAddresses.seedom] =
    participant.entries.times(raiser.valuePerEntry);

  return newState;
};

const handleWithdrawalEvent = (prevState, action) => {
  const newState = { ...prevState };
  // set our balance to zero if we withdrew
  if (action.data.address === newState.account) {
    newState.isLoading.isWithdrawing = false;
    delete newState.balances[action.contractAddress];
  }
  return newState;
};

const seedomReducer = (prevState = {}, action) => {
  switch (action.type) {
    case 'SEEDOM_SEED':
      return handleSeedEvent(prevState, action);
    case 'SEEDOM_PARTICIPATION':
      return handleParticipationEvent(prevState, action);
    case 'SEEDOM_RAISE':
      return handleRaiseEvent(prevState, action);
    case 'SEEDOM_REVELATION':
      return handleRevelationEvent(prevState, action);
    case 'SEEDOM_SELECTION':
      return handleSelectionEvent(prevState, action);
    case 'SEEDOM_CANCELLATION':
      return handleCancellationEvent(prevState);
    case 'SEEDOM_WITHDRAW':
      return handleWithdrawalEvent(prevState, action);
    default:
      return prevState;
  }
};

export default seedomReducer;

/*triageEvent(action, latestBlockNumber) {
  if (action.blockNumber > latestBlockNumber) {
    this.triageNewEvent(action);
  } else {
    this.triageFeedEvent(action);
  }
}
*/
