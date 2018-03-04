import Web3 from 'web3';

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
  let account;
  let rpcNetworkId;
  let wsNetworkId;
  // set up rpc and ws web3s
  const wsWeb3 = new Web3(ETH_URL);
  const rpcWeb3 = getRpcWeb3();

  const contracts = {};
  const primaryContractAddresses = {};
  // set all contracts (last six)
  for (const contractName in ETH_CONTRACTS) {
    const releases = ETH_CONTRACTS[contractName];
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
        ws: new wsWeb3.eth.Contract(release.abi, release.address),
        rpc: rpcWeb3 ? new rpcWeb3.eth.Contract(release.abi, release.address) : null
      };
    }
  }

  // dispatch primary contract addresses
  store.dispatch({
    type: 'ETHEREUM_PRIMARY_CONTRACT_ADDRESSES',
    primaryContractAddresses
  });

  const checkNetwork = () => {
    if (rpcWeb3) {
      rpcWeb3.eth.net.getId((error, id) => {
        // only accept a network change if it matches the ws network
        if ((id === wsNetworkId) && (id !== rpcNetworkId)) {
          rpcNetworkId = id;
          store.dispatch({
            type: 'ETHEREUM_NETWORK',
            network: getNetworkName(id)
          });
        }
      });
    }
  };

  const checkAccount = () => {
    if (rpcWeb3) {
      rpcWeb3.eth.getAccounts((error, newAccounts) => {
        const [newAccount] = newAccounts;
        if (newAccount !== account) {
          account = newAccount;
          store.dispatch({
            type: 'ETHEREUM_ACCOUNT',
            account
          });
        }
      });
    }
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

  // set up web3 change detection polling
  wsWeb3.eth.net.getId((error, id) => {
    wsNetworkId = id;
    setInterval(() => {
      checkNetwork();
      checkAccount();
      checkRefresh();
    }, 1000);
  });

  const setupEventsHandler = (contractName, release, fromBlockNumber) => {
    release.ws.events.allEvents({
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
        account
      });
    });
  };

  // get starting block and setup event handlers
  wsWeb3.eth.getBlockNumber((error, startingBlockNumber) => {
    // dispatch starting block number
    store.dispatch({
      type: 'ETHEREUM_STARTING_BLOCK_NUMBER',
      startingBlockNumber
    });

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
        setupEventsHandler(contractName, release, fromBlockNumber);
      }
    }
  });

  const getRelease = (contractName, contractAddress) => {
    return contractAddress
      ? contracts[contractName][contractAddress]
      : contracts[contractName][primaryContractAddresses[contractName]];
  };

  const getRpcMethod = (contractName, contractAddress, method, args) => {
    return getRelease(contractName, contractAddress).rpc.methods[method].apply(null, args);
  };

  const getWsMethod = (contractName, contractAddress, method, args) => {
    return getRelease(contractName, contractAddress).ws.methods[method].apply(null, args);
  };

  const handleCall = (next, action) => {
    const { contractName, contractAddress, method, args } = action;
    getWsMethod(contractName, contractAddress, method, args).call({ from: account })
      .then(
        data => {
          next({ ...action, type: 'ETHEREUM_CALL_DATA', data });
        },
        error => {
          console.error(error);
          next({ ...action, type: 'ETHEREUM_CALL_ERROR', error });
        }
      );
  };

  const handleAllCall = (next, action) => {
    const { contractName, method, args } = action;
    const promises = [];
    // get contract addresses (an order)
    const contractAddresses = Object.keys(contracts[contractName]);
    // loop over last 6 contracts to execute call
    for (const contractAddress of contractAddresses) {
      promises
        .push(getWsMethod(contractName, contractAddress, method, args)
          .call({ from: account }));
    }

    Promise.all(promises).then((datas) => {
      const data = {};
      for (let i = 0; i < datas.length; i += 1) {
        data[contractAddresses[i]] = datas[i];
      }
      next({ ...action, type: 'ETHEREUM_ALLCALL_DATA', data });
    });
  };

  const handleSendError = (error, next, action) => {
    console.error(error.message);
    next({ ...action, type: 'ETHEREUM_SEND_ERROR', error });
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
        transaction = rpcWeb3.eth.sendTransaction(options);
      } else {
        const { contractName, contractAddress, args } = action;
        transaction = getRpcMethod(contractName, contractAddress, method, args).send(options);
      }

      transaction
        .on('error', (sendError) => {
          const { message } = sendError;
          if (message.includes('User denied')) {
            handleSendError(sendError, next, action);
          }
        });
    };
  };

  const handleSend = (next, action) => {
    const { contractName, contractAddress, method, args, value } = action;
    const options = {
      value,
      from: account,
      to: contractAddress,
      gas: GAS,
      gasPrice: GAS_PRICE,
    };

    const handler = handleSendCall(options, next, action);
    if (!method) {
      rpcWeb3.eth.call(options, handler);
    } else {
      getWsMethod(contractName, contractAddress, method, args).call(options, handler);
    }
  };

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
