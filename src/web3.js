/* eslint import/no-mutable-exports: 0 */

import Web3 from '../node_modules/web3'; // Must specfiy node_modules to avoid importing itself // --> OFF

let rpcWeb3;
if (typeof window !== 'undefined') {
  // set MetaMask web3 at v1.0
  if (typeof window.web3 !== 'undefined' && typeof window.web3.currentProvider !== 'undefined') {
    rpcWeb3 = new Web3(window.web3.currentProvider);
  }
}

const wsWeb3 = url => {
  // set to Seedom's nodes by default
  if (typeof url === 'undefined') {
    url = 'ws://seedom.io:8546';
  }
  return new Web3(url);
};

let account;
if (rpcWeb3) {
  [account] = rpcWeb3.eth.accounts;
  setInterval(() => {
    // check for account changes
    const [currentAccount] = rpcWeb3.eth.accounts;
    if (currentAccount !== account) {
      account = currentAccount;
    }
  }, 1000);
}

export { rpcWeb3, wsWeb3, account };
