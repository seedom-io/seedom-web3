/* eslint import/no-mutable-exports: 0 */

import Web3 from '../../node_modules/web3';

class HybridWeb3 {
  constructor(wsUrl, onChange) {
    this.onChange = onChange;
    this.setupWeb3s(wsUrl);
    if (this.checkMetamask()) {
      this.setupInterval();
    }
  }

  setupWeb3s(wsUrl) {
    this.setupRpcWeb3();
    this.setupWsWeb3(wsUrl);
  }

  setupRpcWeb3() {
    if (typeof window !== 'undefined') {
      // set MetaMask web3 at v1.0
      if (typeof window.web3 !== 'undefined' && typeof window.web3.currentProvider !== 'undefined') {
        this.rpcWeb3 = new Web3(window.web3.currentProvider);
      }
    }
  }

  setupWsWeb3(wsUrl) {
    let actualWsUrl;
    // set to Seedom nodes by default
    if (!wsUrl) {
      actualWsUrl = 'ws://localhost:8546';
    }
    this.wsWeb3 = new Web3(actualWsUrl);
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
