const addFeedItem = (feed, obj, event) => {
  const feedItem = { event, ...obj };
  const newFeed = feed.slice(0, MAX_FEED_ITEMS);
  newFeed.unshift(feedItem);
  return newFeed;
};

const seedom = (state = {}, event) => {
  switch (event.type) {
    case 'NETWORK':
      this.handleNetworkEvent(state, event);
      break;
    case 'ACCOUNT':
      this.handleAccountEvent(state, event);
      break;
    case 'SEED':
      this.handleSeedEvent(state, event);
      break;
    case 'PARTICIPATION':
      this.handleParticipationEvent(state, event);
      break;
    case 'RAISE':
      this.handleRaiseEvent(state, event);
      break;
    case 'REVELATION':
      this.handleRevelationEvent(state, event);
      break;
    case 'SELECTION':
      this.handleSelectionEvent(state, event);
      break;
    case 'CANCELLATION':
      this.handleCancellationEvent(state, event);
      break;
    case 'WITHDRAW':
      this.handleWithdrawalEvent(state, event);
      break;
    default:
      break;
  }
};

const handleNetworkEvent = (state, event) => ({
  ...state,
  network: event.value
});

const handleAccountEvent = (state, event) => ({
  ...state,
  account: event.value
});

const handleSeedEvent = (state, event) => ({
  ...state,
  state: {
    ...state.state,
    charitySecret: event.data.charitySecret
  }
});

const handleParticipationEvent = (state, event) => {
  const newState = {
    state: {
      ...state.state,
      totalParticipants: state.state.totalParticipants.plus(1),
      totalEntries: state.state.totalEntries.plus(event.data.entries),
    },
    feed: addFeedItem(state.feed, event.data, event)
  };

  if (event.data.participant === state.account) {
    newState.isLoading = { ...state.isLoading, isParticipating: false };
    newState.participant = {
      ...state.participant,
      entries: event.data.entries,
      message: event.data.message
    };
  }

  return newState;
};

const handleRaiseEvent = (state, event) => {
  const newState = {
    state: {
      ...state.state,
      totalEntries:
      state.state.totalEntries.plus(event.data.entries)
    },
    feed: addFeedItem(state.feed, event.data, event)
  };

  if (event.data.participant === state.account) {
    newState.isLoading = { ...state.isLoading, isRaising: false };
    newState.participant = {
      ...state.participant,
      entries: state.participant.entries.plus(event.data.entries)
    };
  }

  return newState;
};

const handleRevelationEvent = (state, event) => ({
  ...state,
  state: {
    ...state.state,
    charityMessage: event.data.charityMessage
  }
});

const handleSelectionEvent = (state, event) => {
  const newState = {
    state: {
      ...state.state,
      selected: event.data.selected,
      selectedMessage: event.data.selectedMessage,
      charityMessage: event.data.charityMessage,
      ownerMessage: event.data.ownerMessage,
    }
  };

  // update our winning balance
  if (event.data.selected === state.account) {
    const { raiser, state, contractAddress } = state;
    // preserve existing balances
    newState.balances = { ...state.balances };
    // add new balance entry
    newState.balances[contractAddress] =
      state.totalEntries.times(raiser.winnerSplit).dividedBy(1000).times(raiser.valuePerEntry);
  }

  return newState;
};

handleCancellationEvent() {
  this.setState((state) => {
    const newState = {
      isLoading: { ...state.isLoading, isCancelling: false },
      state: { ...state.state, cancelled: true },
      balances: { ...state.balances }
    };

    // update our cancellation balance
    const { raiser, participant, contractAddress } = state;
    // add new balance entry
    newState.balances[contractAddress] = participant.entries.times(raiser.valuePerEntry);
    return newState;
  });
}

handleWithdrawalEvent(event) {
  const withdrawal = parsers.parseWithdrawal(event.values);
  // set our balance to zero if we withdrew
  if (withdrawal.address === this.state.account) {
    this.setState((state) => {
      const newState = {
        isLoading: { ...state.isLoading, isWithdrawing: false },
        balances: { ...state.balances }
      };
      // delete balance entry for this event's contract addy
      delete newState.balances[event.contractAddress];
      return newState;
    });
  }
}

export default seedom;
