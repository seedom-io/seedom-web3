import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header';
import Puck from './components/Puck';
import Stats from './components/Stats';
import Feed from './components/Feed';
import HybridWeb3 from './utils/hybridWeb3';
import * as randoms from './utils/randoms';
import * as parsers from './utils/parsers';
import * as bytes from './utils/bytes';
import * as etherscan from './utils/etherscan';
import { BigNumber } from 'bignumber.js';
import './index.scss';

const MAX_FEED_ITEMS = 10;
const GAS = 100000;
const GAS_PRICE = 20000000000;
const PAST_BLOCKS_BACK = 10000;
const MAX_LAST_BLOCK_AGE = 60 * 1000; // 60 seconds

const setupEventsHandler = (contract, fromBlockNumber, triage) => {
  contract.ws.events.allEvents({
    fromBlockNumber
  }, (error, result) => {
    triage({
      type: result.event.toLowerCase(),
      values: result.returnValues,
      contractAddress: result.address,
      blockNumber: result.blockNumber,
      transactionHash: result.transactionHash,
      transactionIndex: result.transactionIndex
    });
  });
};

const getWeb3Instance = (web3, contract) => {
  if (!web3) {
    return null;
  }

  return new web3.eth.Contract(contract.abi, contract.address, {
    gas: GAS,
    gasPrice: GAS_PRICE
  });
};

const addFeedItem = (feed, obj, event) => {
  const feedItem = { event, ...obj };
  const newFeed = feed.slice(0, MAX_FEED_ITEMS);
  newFeed.unshift(feedItem);
  return newFeed;
};

class Dapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractAddress: null,
      raiser: null,
      state: null,
      participant: null,
      balances: {},
      feed: [],
      isLoading: {
        isParticipating: false,
        isRaising: false,
        isRevealing: false,
        isWithdrawing: false,
        isCancelling: false,
      }
    };
  }

  componentDidMount() {
    // create metamask rpc/seedom ws web3 object
    this.hybridWeb3 = new HybridWeb3(this.handleHybridWeb3Event);
    // initial setup
    this.setupContracts(() => {
      this.retrieveUserlessData();
      this.setupEventHandlers();
      this.setupDataRefresher();
    });
    // hybrid web3 polls for metamask changes
    this.hybridWeb3.init();
  }

  handleHybridWeb3Event = (event, value) => {
    const newState = {};
    if (event === 'network') {
      newState.network = value;
    } else if (event === 'account') {
      newState.account = value;
    } else if (event === 'isCorrectNetwork') {
      if (!value) {
        toast.error('You are on the wrong network.', {
          position: toast.POSITION.TOP_CENTER
        });
      }
    }

    this.setState(newState, this.retrieveUserData);
  }

  setupContracts(done) {
    // set all contracts (last six)
    this.contracts = {};
    let contractAddress;
    for (const contract of ETH_CONTRACTS) {
      // save first address (primary contract)
      if (!contractAddress) {
        contractAddress = contract.address;
      }
      // add to map of contracts
      this.contracts[contract.address] = {
        address: contract.address,
        ws: getWeb3Instance(this.hybridWeb3.wsWeb3, contract),
        rpc: getWeb3Instance(this.hybridWeb3.rpcWeb3, contract),
      };
    }

    this.setState({
      contractAddress
    }, done);
  }

  getContract() {
    return this.contracts[this.state.contractAddress];
  }

  retrieveData() {
    this.retrieveUserlessData();
    this.retrieveUserData();
  }

  retrieveUserlessData() {
    this.retrieveRaiser();
    this.retrieveState();
  }

  retrieveUserData() {
    const { network, account } = this.state;
    if (network && account) {
      this.retrieveParticipant();
      this.retrieveBalances();
    }
  }

  setupDataRefresher() {
    // last block time to now
    this.lastBlockTime = new Date();
    this.interval = setInterval(() => {
      const lastBlockAge = (new Date()).getTime() - this.lastBlockTime.getTime();
      if (lastBlockAge > MAX_LAST_BLOCK_AGE) {
        console.log('Seedom: last block received too old, refreshing data');
        this.retrieveData();
        // last block time to now
        this.lastBlockTime = new Date();
      }
    }, 1000);
  }

  handleRetrieve(method, done) {
    const { account } = this.state;
    method.call({ from: account })
      .then(
        data => {
          done(data);
        },
        err => {
          console.error(err);
        }
      );
  }

  retrieveRaiser() {
    this.handleRetrieve(this.getContract().ws.methods.raiser(), (data) => {
      this.setState({ raiser: parsers.parseRaiser(data) });
    });
  }

  retrieveState() {
    this.handleRetrieve(this.getContract().ws.methods.state(), (data) => {
      this.setState({ state: parsers.parseState(data) });
    });
  }

  retrieveParticipant() {
    const { account } = this.state;
    this.handleRetrieve(this.getContract().ws.methods.participantsMapping(account), (data) => {
      this.setState({ participant: parsers.parseParticipant(data) });
    });
  }

  retrieveBalances() {
    const { account } = this.state;
    // get contract addresses (an order)
    const contractAddresses = Object.keys(this.contracts);

    const promises = [];
    // loop over last 6 contracts to get old balance data
    for (const contractAddress of contractAddresses) {
      const contract = this.contracts[contractAddress];
      // get balance for this contract
      promises.push(contract.ws.methods.balance().call({ from: account }));
    }

    Promise.all(promises).then((values) => {
      const balances = {};
      for (let i = 0; i < values.length; i += 1) {
        const value = values[i];
        // add balance entries of non-zero
        if (value !== '0') {
          balances[contractAddresses[i]] = new BigNumber(value);
        }
      }
      this.setState({
        balances
      });
    });
  }

  setupEventHandlers() {
    this.hybridWeb3.wsWeb3.eth.getBlockNumber((error, blockNumber) => {
      // get the past block number
      let pastBlockNumber = blockNumber - PAST_BLOCKS_BACK;
      if (pastBlockNumber < 0) {
        pastBlockNumber = 0;
      }

      // set up event handlers for each contract
      for (const contractAddress in this.contracts) {
        const contract = this.contracts[contractAddress];

        let fromBlockNumber;
        let triager;
        if (contractAddress === this.state.contractAddress) {
          // for current contract, pull old events and listen for new
          fromBlockNumber = pastBlockNumber;
          triager = (params) => this.triageEvent(params, blockNumber);
        } else {
          // for legacy contracts, only listen for legacy events (withdraw)
          fromBlockNumber = pastBlockNumber;
          triager = (params) => this.triageLegacyEvent(params);
        }

        setupEventsHandler(contract, fromBlockNumber, triager);
      }
    });
  }

  triageEvent(event, blockNumber) {
    if (event.blockNumber > blockNumber) {
      this.triageNewEvent(event);
    } else {
      this.triageFeedEvent(event);
    }
  }

  triageFeedEvent(event) {
    const { type, values } = event;

    let obj;
    switch (type) {
      case 'participation':
        obj = parsers.parseParticipation(values);
        break;
      case 'raise':
        obj = parsers.parseRaise(values);
        break;
      case 'revelation':
        obj = parsers.parseRevelation(values);
        break;
      default:
        break;
    }

    if (obj) {
      this.setState((prevState) => {
        return {
          feed: addFeedItem(prevState.feed, obj, event)
        };
      });
    }
  }

  triageNewEvent(event) {
    // update block time
    this.lastBlockTime = new Date();

    switch (event.type) {
      case 'seed':
        this.handleSeedEvent(event);
        break;
      case 'participation':
        this.handleParticipationEvent(event);
        break;
      case 'raise':
        this.handleRaiseEvent(event);
        break;
      case 'revelation':
        this.handleRevelationEvent(event);
        break;
      case 'win':
        this.handleWinEvent(event);
        break;
      case 'cancellation':
        this.handleCancellationEvent();
        break;
      case 'withdrawal':
        this.handleWithdrawalEvent(event);
        break;
      default:
        break;
    }
  }

  triageLegacyEvent(event) {
    if (event.type === 'withdraw') {
      this.handleWithdrawalEvent(event);
    }
  }

  handleSeedEvent(event) {
    const seed = parsers.parseSeed(event.values);
    this.setState((prevState) => ({
      state: { ...prevState.state, charityHashedRandom: seed.charityHashedRandom }
    }));
  }

  handleParticipationEvent(event) {
    const participation = parsers.parseParticipation(event.values);
    this.setState((prevState) => {
      const newState = {
        state: {
          ...prevState.state,
          totalParticipants: prevState.state.totalParticipants.plus(1),
          totalEntries: prevState.state.totalEntries.plus(participation.entries),
        },
        feed: addFeedItem(prevState.feed, participation, event)
      };

      if (participation.participant === prevState.account) {
        newState.isLoading = { ...prevState.isLoading, isParticipating: false };
        newState.participant = {
          ...prevState.participant,
          entries: participation.entries,
          hashedRandom: participation.hashedRandom
        };
      }

      return newState;
    });
  }

  handleRaiseEvent(event) {
    const raise = parsers.parseRaise(event.values);
    this.setState((prevState) => {
      const newState = {
        state: { ...prevState.state, totalEntries: prevState.state.totalEntries.plus(raise.entries) },
        feed: addFeedItem(prevState.feed, raise, event)
      };

      if (raise.participant === prevState.account) {
        newState.isLoading = { ...prevState.isLoading, isRaising: false };
        newState.participant = {
          ...prevState.participant,
          entries: prevState.participant.entries.plus(raise.entries)
        };
      }

      return newState;
    });
  }

  handleRevelationEvent(event) {
    const revelation = parsers.parseRevelation(event.values);
    this.setState((prevState) => {
      const newState = {
        state: { ...prevState.state, totalRevealed: prevState.state.totalRevealed.plus(revelation.entries) },
        feed: addFeedItem(prevState.feed, revelation, event)
      };

      if (revelation.participant === prevState.account) {
        newState.isLoading = { ...prevState.isLoading, isRevealing: false };
        newState.participant = { ...prevState.participant, random: revelation.random };
      }

      return newState;
    });
  }

  handleWinEvent(event) {
    const win = parsers.parseWin(event.values);
    this.setState((prevState) => {
      const newState = {
        state: {
          ...prevState.state,
          winner: win.winner,
          winnerRandom: win.winnerRandom,
          charityRandom: win.charityRandom
        }
      };

      // update our winning balance
      if (win.winner === prevState.account) {
        const { raiser, state, contractAddress } = prevState;
        // preserve existing balances
        newState.balances = { ...prevState.balances };
        // add new balance entry
        newState.balances[contractAddress] =
          state.totalEntries.times(raiser.winnerSplit).dividedBy(1000).times(raiser.valuePerEntry);
      }

      return newState;
    });
  }

  handleCancellationEvent() {
    this.setState((prevState) => {
      const newState = {
        isLoading: { ...prevState.isLoading, isCancelling: false },
        state: { ...prevState.state, cancelled: true },
        balances: { ...prevState.balances }
      };

      // update our cancellation balance
      const { raiser, participant, contractAddress } = prevState;
      // add new balance entry
      newState.balances[contractAddress] = participant.entries.times(raiser.valuePerEntry);
      return newState;
    });
  }

  handleWithdrawalEvent(event) {
    const withdrawal = parsers.parseWithdrawal(event.values);
    // set our balance to zero if we withdrew
    if (withdrawal.address === this.state.account) {
      this.setState((prevState) => {
        const newState = {
          isLoading: { ...prevState.isLoading, isWithdrawing: false },
          balances: { ...prevState.balances }
        };
        // delete balance entry for this event's contract addy
        delete newState.balances[event.contractAddress];
        return newState;
      });
    }
  }

  handleSend = (method, options, isLoadingName) => {
    this.setState((prevState) => {
      const newState = { isLoading: { ...prevState.isLoading } };
      newState.isLoading[isLoadingName] = true;
      return newState;
    }, () => {
      const resultHandler = this.handleSendCall(method, options, isLoadingName);
      if (method === null) {
        this.hybridWeb3.rpcWeb3.eth.call(options, resultHandler);
      } else {
        method.call(options, resultHandler);
      }
    });
  }

  handleSendCall = (method, options, isLoadingName) => {
    return (callError) => {
      if (callError) {
        this.handleSendError(callError, isLoadingName);
        return;
      }

      let transaction;
      if (method === null) {
        transaction = this.hybridWeb3.rpcWeb3.eth.sendTransaction(options);
      } else {
        transaction = method.send(options);
      }

      transaction
        .on('error', (sendError) => {
          const { message } = sendError;
          if (message.includes('User denied')) {
            this.handleSendError(sendError, isLoadingName);
          }
        });
    };
  }

  handleSendError = (error, isLoadingName) => {
    console.log(`ERROR: ${error.message}`);
    this.setState((prevState) => {
      const newState = { isLoading: { ...prevState.isLoading } };
      newState.isLoading[isLoadingName] = false;
      return newState;
    });
  }

  handleParticipate = ({ random, entries }) => {
    const { account, raiser } = this.state;
    const randomHex = randoms.hexRandom(random);
    const hashedRandom = randoms.hashRandom(randomHex, account);
    const value = entries.times(raiser.valuePerEntry);

    this.handleSend(this.getContract().rpc.methods.participate(hashedRandom), {
      from: account, value
    }, 'isParticipating');
  }

  handleRaise = (entries) => {
    const { account, raiser, contractAddress } = this.state;
    const value = entries.times(raiser.valuePerEntry);

    this.handleSend(null, {
      to: contractAddress, value, from: account
    }, 'isRaising');
  }

  handleReveal = (random) => {
    const { account } = this.state;
    const randomHex = randoms.hexRandom(random);

    this.handleSend(this.getContract().rpc.methods.reveal(randomHex), {
      from: account
    }, 'isRevealing');
  }

  handleWithdraw = (contractAddress) => {
    const { account } = this.state;
    const contract = this.contracts[contractAddress];

    this.handleSend(contract.rpc.methods.withdraw(), {
      from: account
    }, 'isWithdrawing');
  }

  handleCancel = () => {
    const { account } = this.state;

    this.handleSend(this.getContract().rpc.methods.cancel(), {
      from: account
    }, 'isCancelling');
  }

  render() {
    const {
      network,
      account,
      contractAddress,
      raiser,
      state,
      participant,
      balances,
      feed,
      isLoading
    } = this.state;

    // render only if we have a contract address, raiser, and state
    if (!contractAddress || !raiser || !state) {
      return null;
    }

    return (
      <div className="seedom-dapp">
        <ToastContainer />
        <Header raiser={raiser} network={network} />
        <div className="dapp-container">
          <Stats
            side="left"
            raiser={raiser}
            state={state}
          />
          <Puck
            network={network}
            account={account}
            raiser={raiser}
            state={state}
            participant={participant}
            balances={balances}
            isLoading={isLoading}
            onParticipate={this.handleParticipate}
            onRaise={this.handleRaise}
            onReveal={this.handleReveal}
            onWithdraw={this.handleWithdraw}
            onCancel={this.handleCancel}
          />
          <Stats
            side="right"
            raiser={raiser}
            state={state}
          />
        </div>
        <div className="container">
          <div className="content has-text-centered">
            <Feed feed={feed} network={network} />
          </div>
        </div>
        <div className="container">
          <div className="content has-text-centered">
            <p>
              View more live <strong>Seedom</strong> data on&nbsp;
              <a className="is-green" target="_blank" href={etherscan.getAddressUrl(network, contractAddress)}>Etherscan</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dapp;
