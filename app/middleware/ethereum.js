import Web3 from 'web3';
import * as parsers from '../utils/parsers';

const PAST_BLOCKS_BACK = 10000;

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

const ethereumMiddleware = (store) => {
  let rpcWeb3;
  let account;
  let rpcNetworkId;
  let wsNetworkId;
  // set up ws web3
  const wsWeb3 = new Web3(ETH_URL);

  // setup rpc web3
  if (typeof window !== 'undefined') {
    // set MetaMask web3 at v1.0
    if (typeof window.web3 !== 'undefined' && typeof window.web3.currentProvider !== 'undefined') {
      rpcWeb3 = new Web3(window.web3.currentProvider);
    }
  }

  const checkNetwork = () => {
    rpcWeb3.eth.net.getId((error, id) => {
      // only accept a network change if it matches the ws network
      if ((id === wsNetworkId) && (id !== rpcNetworkId)) {
        rpcNetworkId = id;
        store.dispatch({
          type: 'NETWORK',
          value: getNetworkName(id)
        });
      }
    });
  };

  const checkAccount = () => {
    rpcWeb3.eth.getAccounts((error, newAccounts) => {
      const [newAccount] = newAccounts;
      if (newAccount !== account) {
        account = newAccount;
        store.dispatch({
          type: 'ACCOUNT',
          value: account
        });
      }
    });
  };

  // set ws network
  wsWeb3.eth.net.getId((error, id) => {
    wsNetworkId = id;
    // if no rpc, no need to set up the interval
    if (!rpcWeb3) {
      return;
    }

    setInterval(() => {
      checkNetwork();
      checkAccount();
    }, 1000);
  });

  // set all contracts (last six)
  const contracts = {};
  let primaryContractAddress;
  for (const contract of ETH_CONTRACTS) {
    // save first address (primary contract)
    if (!primaryContractAddress) {
      primaryContractAddress = contract.address;
    }
    // add to map of contracts
    contracts[contract.address] = {
      address: contract.address,
      ws: new wsWeb3.eth.Contract(contract.abi, contract.address),
      rpc: new rpcWeb3.eth.Contract(contract.abi, contract.address)
    };
  }

  // dispatch primary contract address
  store.dispatch({
    type: 'PRIMARY_CONTRACT_ADDRESS',
    value: primaryContractAddress
  });

  const getPrimaryContract = () => {
    return contracts[primaryContractAddress];
  };

  const setupEventsHandler = (contract, fromBlockNumber) => {
    contract.ws.events.allEvents({
      fromBlock: fromBlockNumber
    }, (error, result) => {
      const type = result.event.toUpperCase();
      if (!(type in parsers)) {
        return;
      }
      store.dispatch({
        type,
        data: parsers[type](result.returnValues),
        contractAddress: result.address,
        blockNumber: result.blockNumber,
        transactionHash: result.transactionHash,
        transactionIndex: result.transactionIndex
      });
    });
  };

  // set up event handlers
  wsWeb3.eth.getBlockNumber((error, startingBlockNumber) => {
    // dispatch starting block number
    store.dispatch({
      type: 'STARTING_BLOCK_NUMBER',
      value: startingBlockNumber
    });

    // get the feed block number (what block to start at for feed)
    let pastBlockNumber = startingBlockNumber - PAST_BLOCKS_BACK;
    if (pastBlockNumber < 0) {
      pastBlockNumber = 0;
    }

    // set up event handlers for each contract
    for (const contractAddress in contracts) {
      const contract = contracts[contractAddress];
      const fromBlockNumber =
        (contractAddress === primaryContractAddress) ? pastBlockNumber : startingBlockNumber;
      setupEventsHandler(contract, fromBlockNumber);
    }
  });

  return next => action => {
    return next(action);
  };
};

export default ethereumMiddleware;
