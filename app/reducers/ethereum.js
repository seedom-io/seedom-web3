const ethereumReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ETHEREUM_NETWORK':
      return { ...state, network: action.network };
    case 'ETHEREUM_ACCOUNT':
      return { ...state, account: action.account };
    case 'ETHEREUM_PRIMARY_CONTRACT_ADDRESSES':
      return { ...state, primaryContractAddresses: action.primaryContractAddresses };
    case 'ETHEREUM_STARTING_BLOCK_NUMBER':
      return { ...state, startingBlockNumber: action.startingBlockNumber };
    default:
      return state;
  }
};

export default ethereumReducer;
