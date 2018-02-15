const getSubdomain = (network) => ((network === 'mainnet') ? 'www' : network);

const getAddressUrl = (network, address) => {
  if (!network) {
    return null;
  }
  return `https://${getSubdomain(network)}.etherscan.io/address/${address}`;
};

const getTransactionUrl = (network, transactionHash) => {
  if (!network) {
    return null;
  }
  return `https://${getSubdomain(network)}.etherscan.io/txn/${transactionHash}`;
};

export {
  getAddressUrl,
  getTransactionUrl
};
