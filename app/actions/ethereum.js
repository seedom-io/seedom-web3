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

export {
  call,
  allCall
};
