const getSubdomain = (network) => ((network === 'mainnet') ? 'www' : network);

const getAddressUrl = (network, address) => {
  if (network === 'localhost') { return ''; }
  return `https://${getSubdomain(network)}.etherscan.io/address/${address}`;
};

const getTransactionUrl = (network, transactionHash) => {
  if (network === 'localhost') { return ''; }
  return `https://${getSubdomain(network)}.etherscan.io/tx/${transactionHash}`;
};

export {
  getAddressUrl,
  getTransactionUrl
};
