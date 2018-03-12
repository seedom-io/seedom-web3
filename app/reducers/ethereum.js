const getNewState = (prevState) => {
  return { ...prevState };
};

const handleEthereumSend = (prevState) => {
  const newState = getNewState(prevState);
  newState.isLoading = true;
  return newState;
};

const handleEthereumSendError = (prevState) => {
  const newState = getNewState(prevState);
  newState.isLoading = false;
  return newState;
};

const ethereumReducer = (prevState = {}, action) => {
  switch (action.type) {
    case 'ETHEREUM_NETWORK':
      return { ...prevState, network: action.network };
    case 'ETHEREUM_ACCOUNT':
      return { ...prevState, account: action.account };
    case 'ETHEREUM_PRIMARY_CONTRACT_ADDRESSES':
      return { ...prevState, primaryContractAddresses: action.primaryContractAddresses };
    case 'ETHEREUM_SEND':
      return handleEthereumSend(prevState, action);
    case 'ETHEREUM_SEND_ERROR':
      return handleEthereumSendError(prevState);
    default:
      return prevState;
  }
};

export default ethereumReducer;
