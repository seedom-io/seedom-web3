import Web3 from 'web3';
import { toastr } from 'react-redux-toastr';

const PAST_BLOCKS_BACK = 10000;
const MAX_LAST_BLOCK_AGE = 60 * 1000; // 60 seconds
const GAS = 200000;
const GAS_PRICE = 4000000000;

const getNetworkName = (id) => {
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

const getClientWeb3 = () => {
  // setup client web3
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
  const clientWeb3 = getClientWeb3();
  // middleware state
  let serverWeb3;
  let account;
  let network;
  const contracts = {};
  const primaryContractAddresses = {};

  const getContract = (name) => {
    return contracts[name];
  };

  const getClientMethod = (release, method, args) => {
    return release.client.methods[method].apply(null, args);
  };

  const getServerMethod = (release, method, args) => {
    return release.server.methods[method].apply(null, args);
  };

  const handleCallError = (error, action) => {
    console.error(error.message);
    store.dispatch({ ...action, type: 'ETHEREUM_CALL_ERROR', error });
  };

  const handleCall = (next, action) => {
    const { contractName, contractAddress, method, args } = action;
    const contract = getContract(contractName);
    if (contract) {
      const release = contract[contractAddress || primaryContractAddresses[contractName]];
      if (release) {
        const serverMethod = getServerMethod(release, method, args);
        serverMethod.call({ from: account })
          .then(
            data => {
              store.dispatch({ ...action, type: 'ETHEREUM_CALL_DATA', data });
            },
            error => {
              handleCallError(error, action);
            }
          );
      }
    }

    return next(action);
  };

  const handleAllCall = (next, action) => {
    const { contractName, method, args } = action;
    const promises = [];
    const contract = getContract(contractName);
    if (contract) {
      // get contract addresses (an order)
      const contractAddresses = Object.keys(contracts[contractName]);
      // loop over last 6 contracts to execute call
      for (const contractAddress of contractAddresses) {
        const release = contract[contractAddress || primaryContractAddresses[contractName]];
        if (release) {
          const serverMethod = getServerMethod(release, method, args);
          promises.push(serverMethod.call({ from: account }));
        }
      }

      Promise.all(promises).then((datas) => {
        const data = {};
        for (let i = 0; i < datas.length; i += 1) {
          data[contractAddresses[i]] = datas[i];
        }
        store.dispatch({ ...action, type: 'ETHEREUM_ALLCALL_DATA', data });
      });
    }

    return next(action);
  };

  const handleSendError = (error, action) => {
    let finalMessage;
    const { message } = error;
    if (message.includes('User denied')) {
      finalMessage = 'USER CANCELLED TRANSACTION';
    } else if (message.includes('Insufficient funds')) {
      finalMessage = 'INSUFFICIENT FUNDS';
    } else {
      finalMessage = 'UNKNOWN ERROR';
    }

    // send out send error & toastr notification
    store.dispatch({ ...action, type: 'ETHEREUM_SEND_ERROR', error: finalMessage });
    toastr.error('ETHEREUM ERROR', finalMessage);
  };

  const handleSendSuccess = (action) => {
    store.dispatch({ ...action, type: 'ETHEREUM_SEND_SUCCESS' });
  };

  const handleSendCall = (options, release, next, action) => {
    return (callError) => {
      if (callError) {
        handleSendError(callError, action);
        return;
      }

      let transaction;
      const { method } = action;
      if (!method) {
        transaction = clientWeb3.eth.sendTransaction(options);
      } else {
        const { args } = action;
        const clientMethod = getClientMethod(release, method, args);
        transaction = clientMethod.send(options);
      }

      transaction
        .on('error', (sendError) => {
          handleSendError(sendError, action);
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

    const contract = getContract(contractName);
    if (contract) {
      const release = contract[contractAddress || primaryContractAddresses[contractName]];
      if (release) {
        options.to = release.address;
        const handler = handleSendCall(options, release, next, action);
        if (!method) {
          clientWeb3.eth.call(options, handler);
        } else {
          const serverMethod = getServerMethod(release, method, args);
          serverMethod.call(options, handler);
        }
      }
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

  const setupServerWeb3 = (networkName) => {
    const ethNetwork = ETH_NETWORKS[networkName];
    if (ethNetwork) {
      // use websocket url
      serverWeb3 = new Web3(ethNetwork.wsUrl);
      return true;
    }

    serverWeb3 = null;
    return false;
  };

  const setupContracts = (networkName) => {
    const ethDeployments = ETH_DEPLOYMENTS[networkName];
    if (!ethDeployments) {
      return false;
    }

    // set all contracts (last six)
    for (const contractName in ethDeployments) {
      const releases = ethDeployments[contractName];
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
          name: contractName,
          address: release.address,
          server: new serverWeb3.eth.Contract(release.abi, release.address),
          client: clientWeb3 ? new clientWeb3.eth.Contract(release.abi, release.address) : null
        };
      }
    }

    // dispatch primary contract addresses
    store.dispatch({
      type: 'ETHEREUM_PRIMARY_CONTRACT_ADDRESSES',
      primaryContractAddresses
    });

    return true;
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

  const setupNetwork = (id) => {
    // see if we are already on this network
    if (network && (id === network.id)) {
      return;
    }

    // destroy old network
    destroyCurrentNetwork();
    // setup server web3
    const name = getNetworkName(id);
    const supported = setupServerWeb3(name);

    let deployed = false;
    // continue if supported
    if (supported) {
      // setup contracts
      deployed = setupContracts(name);
      // setup event handlers
      setupContractEventHandlers();
    }

    // save network object
    network = {
      id,
      name,
      supported,
      deployed
    };

    // dispatch new network
    store.dispatch({
      type: 'ETHEREUM_NETWORK',
      network
    });
  };
  const checkUser = () => {
    if (!network || !network.supported || !network.deployed || !account) {
      return;
    }

    store.dispatch({
      type: 'ETHEREUM_USER',
      network,
      account
    });
  };

  const checkNetwork = () => {
    if (!clientWeb3) {
      // default to mainnet
      setupNetwork(1);
      return;
    }

    // use plugin network
    clientWeb3.eth.net.getId((error, id) => {
      setupNetwork(id);
      // see if user established
      checkUser();
    });
  };

  const checkAccount = () => {
    if (!clientWeb3) {
      return;
    }

    clientWeb3.eth.getAccounts((error, newAccounts) => {
      const [newAccount] = newAccounts;
      if (newAccount !== account) {
        account = newAccount;
        store.dispatch({
          type: 'ETHEREUM_ACCOUNT',
          account
        });
        // see if user established
        checkUser();
      }
    });
  };

  const checkRefresh = () => {
    if (!network || !network.supported || !network.deployed) {
      return;
    }

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
  setInterval(() => {
    checkNetwork();
    checkAccount();
    checkRefresh();
  }, 1000);

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
