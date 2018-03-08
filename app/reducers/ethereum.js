const handleEthereumSend = (prevState) => {
  return { ...prevState, isLoading: true };
};

const handleEthereumSendError = (prevState) => {
  return { ...prevState, isLoading: false };
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
