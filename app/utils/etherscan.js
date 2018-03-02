const getSubdomain = (network) => ((network === 'mainnet') ? 'www' : network);

const getAddressUrl = (network, address) => `https://${getSubdomain(network)}.etherscan.io/address/${address}`;

const getTransactionUrl = (network, transactionHash) => `https://${getSubdomain(network)}.etherscan.io/tx/${transactionHash}`;

export {
  getAddressUrl,
  getTransactionUrl
};
