/* eslint import/no-mutable-exports: 0 */

import Web3 from 'web3';

class HybridWeb3 {
  constructor(onChange) {
    this.onChange = onChange;
    this.setupWeb3s();
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
    this.wsWeb3 = new Web3(ETH_URL);
  }

  init() {
    if (!this.rpcWeb3) {
      return;
    }

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

        this.wsWeb3.eth.net.getId((wsError, wsNetworkId) => {
          this.onChange('isCorrectNetwork', wsNetworkId === networkId);
        });
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
