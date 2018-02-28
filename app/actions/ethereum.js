const call = ({ contractName, contractAddress, method, args }) => ({
  type: 'ETHEREUM_CALL',
  contractName,
  contractAddress,
  method,
  args
});

const allCall = ({ contractName, method, args }) => ({
  type: 'ETHEREUM_ALLCALL',
  contractName,
  method,
  args
});

const send = ({ contractName, contractAddress, method, args }) => ({
  type: 'ETHEREUM_SEND',
  contractName,
  contractAddress,
  method,
  args
});

export {
  call,
  allCall,
  send
};
