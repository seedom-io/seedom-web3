/* eslint import/no-mutable-exports: 0 */

import Web3 from 'web3';

class HybridWeb3 {
  constructor(onChange) {
    this.onChange = onChange;
    this.setupWeb3s();
    if (this.checkMetamask()) {
      this.setupInterval();
    }
  }

  setupWeb3s() {
    this.setupRpcWeb3();
    this.setupWsWeb3();
  }

  setupRpcWeb3() {
    if (typeof window !== 'undefined') {
      // set MetaMask web3 at v1.0
      if (typeof window.web3 !== 'undefined' && typeof window.web3.currentProvider !== 'undefined') {
        this.rpcWeb3 = new Web3(window.web3.currentProvider);
      }
    }
  }

  setupWsWeb3() {
    let ethNode;
    if (process.env.ETH_NODE) {
      ethNode = `${process.env.ETH_NODE}`;
    } else {
      ethNode = 'localhost';
    }
    this.wsWeb3 = new Web3(`ws://${ethNode}:8546`);
  }

  checkMetamask() {
    const hasMetamask = (typeof this.rpcWeb3 !== 'undefined');
    this.onChange('hasMetamask', hasMetamask);
    return hasMetamask;
  }

  setupInterval() {
    setInterval(() => {
      this.checkNetwork();
      this.checkAccount();
    }, 1000);
  }

  checkNetwork() {
    this.rpcWeb3.eth.net.getId((error, networkId) => {
      if (this.networkId !== networkId) {
        this.networkId = networkId;
        this.onChange('networkId', networkId);
      }
    });
  }

  checkAccount() {
    this.rpcWeb3.eth.getAccounts((error, accounts) => {
      const [account] = accounts;
      if (account !== this.account) {
        this.account = account;
        this.onChange('account', account);
      }
    });
  }
}

export default HybridWeb3;