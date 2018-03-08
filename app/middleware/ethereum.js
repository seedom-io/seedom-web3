import Web3 from 'web3';
import { toastr } from 'react-redux-toastr';

const PAST_BLOCKS_BACK = 10000;
const MAX_LAST_BLOCK_AGE = 60 * 1000; // 60 seconds
const GAS = 200000;
const GAS_PRICE = 4000000000;

const getNetwork = (id) => {
  switch (id) {
    case 1:
      return 'mainnet';
    case 2:
      return 'morden';
    case 3:
      return 'ropsten';
    case 4:
      return 'rinkeby';
    case 42:
      return 'kovan';
    default:
      return 'localhost';
  }
};

const getRpcWeb3 = () => {
  // setup rpc web3
  if (typeof window !== 'undefined') {
    // set MetaMask web3 at v1.0
    if (typeof window.web3 !== 'undefined' && typeof window.web3.currentProvider !== 'undefined') {
      return new Web3(window.web3.currentProvider);
    }
  }
  return null;
};

const ethereumMiddleware = (store) => {
  // client web3 is source of truth
  const clientWeb3 = getRpcWeb3();
  // middleware state
  let serverWeb3;
  let account;
  let networkId;
  const contracts = {};
  const primaryContractAddresses = {};

  const getRelease = (contractName, contractAddress) => {
    return contractAddress
      ? contracts[contractName][contractAddress]
      : contracts[contractName][primaryContractAddresses[contractName]];
  };

  const getClientMethod = (contractName, contractAddress, method, args) => {
    return getRelease(contractName, contractAddress).client.methods[method].apply(null, args);
  };

  const getServerMethod = (contractName, contractAddress, method, args) => {
    return getRelease(contractName, contractAddress).server.methods[method].apply(null, args);
  };

  const handleCall = (next, action) => {
    const { contractName, contractAddress, method, args } = action;
    getServerMethod(contractName, contractAddress, method, args).call({ from: account })
      .then(
        data => {
          store.dispatch({ ...action, type: 'ETHEREUM_CALL_DATA', data });
        },
        error => {
          console.error(error);
          toastr.error('Call Error', error.message);
        }
      );
    return next(action);
  };

  const handleAllCall = (next, action) => {
    const { contractName, method, args } = action;
    const promises = [];
    // get contract addresses (an order)
    const contractAddresses = Object.keys(contracts[contractName]);
    // loop over last 6 contracts to execute call
    for (const contractAddress of contractAddresses) {
      promises
        .push(getServerMethod(contractName, contractAddress, method, args)
          .call({ from: account }));
    }

    Promise.all(promises).then((datas) => {
      const data = {};
      for (let i = 0; i < datas.length; i += 1) {
        data[contractAddresses[i]] = datas[i];
      }
      store.dispatch({ ...action, type: 'ETHEREUM_ALLCALL_DATA', data });
    });

    return next(action);
  };

  const handleSendError = (error, action) => {
    console.error(error.message);
    toastr.error('Send Error', error.message);
  };

  const handleSendSuccess = (action) => {
    store.dispatch({ ...action, type: 'ETHEREUM_SEND_SUCCESS' });
  };

  const handleSendCall = (options, next, action) => {
    return (callError) => {
      if (callError) {
        handleSendError(callError, next, action);
        return;
      }

      let transaction;
      const { method } = action;
      if (!method) {
        transaction = clientWeb3.eth.sendTransaction(options);
      } else {
        const { contractName, contractAddress, args } = action;
        transaction = getClientMethod(contractName, contractAddress, method, args).send(options);
      }

      transaction
        .on('error', (sendError) => {
          const { message } = sendError;
          if (message.includes('User denied')) {
            handleSendError(sendError, action);
          }
        })
        .on('confirmation', (confirmationNumber) => {
          if (confirmationNumber === 0) {
            handleSendSuccess(action);
          }
        });
    };
  };

  const handleSend = (next, action) => {
    const { contractName, contractAddress, method, args, value } = action;
    const options = {
      value,
      from: account,
      gas: GAS,
      gasPrice: GAS_PRICE,
    };

    options.to = !contractAddress
      ? primaryContractAddresses[contractName]
      : contractAddress;

    const handler = handleSendCall(options, next, action);
    if (!method) {
      clientWeb3.eth.call(options, handler);
    } else {
      getServerMethod(contractName, contractAddress, method, args).call(options, handler);
    }

    return next(action);
  };

  const destroyCurrentNetwork = () => {
    for (const contractName in contracts) {
      const releases = contracts[contractName];
      for (const contractAddress in releases) {
        const release = releases[contractAddress];
        release.server.currentProvider.connection.close();
      }
      delete contracts[contractName];
      delete primaryContractAddresses[contractName];
    }
  };

  const setupServerWeb3 = (network) => {
    const ethNetwork = ETH_NETWORKS[network];
    if (ethNetwork) {
      serverWeb3 = new Web3(ethNetwork.url);
      return true;
    }
    serverWeb3 = null;
    return false;
  };

  const setupContracts = (network) => {
    const deployments = ETH_DEPLOYMENTS[network];
    // set all contracts (last six)
    for (const contractName in deployments) {
      const releases = deployments[contractName];
      for (const release of releases) {
        // save first address (primary contract)
        if (!(contractName in primaryContractAddresses)) {
          primaryContractAddresses[contractName] = release.address;
        }

        if (!(contractName in contracts)) {
          contracts[contractName] = {};
        }

        // add to map of contracts
        contracts[contractName][release.address] = {
          address: release.address,
          server: new serverWeb3.eth.Contract(release.abi, release.address),
          client: new clientWeb3.eth.Contract(release.abi, release.address)
        };
      }
    }

    // dispatch primary contract addresses
    store.dispatch({
      type: 'ETHEREUM_PRIMARY_CONTRACT_ADDRESSES',
      primaryContractAddresses
    });
  };

  const setupContractEventHandler = (
    contractName,
    release,
    fromBlockNumber,
    startingBlockNumber
  ) => {
    release.server.events.allEvents({
      fromBlock: fromBlockNumber
    }, (error, result) => {
      store.dispatch({
        type: 'ETHEREUM_EVENT',
        eventName: result.event.toUpperCase(),
        contractName,
        values: result.returnValues,
        contractAddress: result.address,
        blockNumber: result.blockNumber,
        transactionHash: result.transactionHash,
        transactionIndex: result.transactionIndex,
        old: result.blockNumber <= startingBlockNumber
      });
    });
  };

  const setupContractEventHandlers = () => {
    // get starting block and setup event handlers
    serverWeb3.eth.getBlockNumber((error, startingBlockNumber) => {
      // get the feed block number (what block to start at for feed)
      let pastBlockNumber = startingBlockNumber - PAST_BLOCKS_BACK;
      if (pastBlockNumber < 0) {
        pastBlockNumber = 0;
      }

      // set up event handlers for each contract
      for (const contractName in contracts) {
        const releases = contracts[contractName];
        const primaryContractAddress = primaryContractAddresses[contractName];
        for (const contractAddress in releases) {
          const release = releases[contractAddress];
          const fromBlockNumber =
            (release.address === primaryContractAddress) ? pastBlockNumber : startingBlockNumber;
          setupContractEventHandler(contractName, release, fromBlockNumber, startingBlockNumber);
        }
      }
    });
  };

  const setupNetwork = (network) => {
    // destroy old network
    destroyCurrentNetwork();
    // setup server web3
    const supported = setupServerWeb3(network);
    // continue if supported
    if (supported) {
      // setup contracts
      setupContracts(network);
      // setup event handlers
      setupContractEventHandlers();
    }
    // dispatch new network
    store.dispatch({
      type: 'ETHEREUM_NETWORK',
      network: {
        name: network,
        supported
      }
    });
  };

  const checkNetwork = () => {
    clientWeb3.eth.net.getId((error, id) => {
      if (id !== networkId) {
        networkId = id;
        setupNetwork(getNetwork(id));
      }
    });
  };

  const checkAccount = () => {
    clientWeb3.eth.getAccounts((error, newAccounts) => {
      const [newAccount] = newAccounts;
      if (newAccount !== account) {
        account = newAccount;
        store.dispatch({
          type: 'ETHEREUM_ACCOUNT',
          account
        });
      }
    });
  };

  const checkRefresh = () => {
    const now = (new Date()).getTime();
    const contractAddresses = [];

    for (const contractName in contracts) {
      const releases = contracts[contractName];
      for (const contractAddress in releases) {
        const release = releases[contractAddress];
        if (!release.lastBlockTime || ((now - release.lastBlockTime.getTime()) > MAX_LAST_BLOCK_AGE)) {
          // last block time to now
          release.lastBlockTime = new Date();
          contractAddresses.push(release.address);
        }
      }
    }

    if (contractAddresses.length > 0) {
      store.dispatch({ type: 'ETHEREUM_REFRESH', contractAddresses });
    }
  };

  // set up client web3 change detection polling
  if (clientWeb3) {
    setInterval(() => {
      checkNetwork();
      checkAccount();
      checkRefresh();
    }, 1000);
  }

  return next => action => {
    const { type } = action;
    switch (type) {
      case 'ETHEREUM_CALL':
        return handleCall(next, action);
      case 'ETHEREUM_SEND':
        return handleSend(next, action);
      case 'ETHEREUM_ALLCALL':
        return handleAllCall(next, action);
      default:
        return next(action);
    }
  };
};

export default ethereumMiddleware;
