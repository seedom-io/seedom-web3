import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Puck from './components/Puck';
import Hud from './components/Hud';
import Feed from './components/Feed';
import HybridWeb3 from './utils/hybridWeb3';
import * as randoms from './utils/randoms';
import * as parsers from './utils/parsers';
import * as bytes from './utils/bytes';
import './index.scss';

const MAX_FEED_ITEMS = 10;
const GAS = 2000000;
const GAS_PRICE = 20000000000;
const FEED_BLOCKS_BACK = 1000;

const getWeb3Instance = (web3, contract) => {
  return new web3.eth.Contract(contract.abi, contract.address, {
    gas: GAS,
    gasPrice: GAS_PRICE
  });
};

const addFeedItem = (feed, obj, type) => {
  const feedItem = { type, ...obj };
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
    this.hybridWeb3 = new HybridWeb3(this.handleHybridWeb3Event);
  }

  handleHybridWeb3Event = (event, value) => {
    const newState = {};
    if (event === 'networkId') {
      newState.networkId = value;
    } else if (event === 'account') {
      newState.account = value;
    } else if (event === 'hasMetamask') {
      newState.hasMetamask = value;
    }

    this.setState(newState, this.continueLoading);
  }

  continueLoading() {
    const { hasMetamask, networkId, account } = this.state;

    if (hasMetamask && networkId && account) {
      this.setupContracts(() => {
        this.retrieveInitialData();
        this.setupEventsHandlers();
      });
    }
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

  retrieveInitialData() {
    this.retrieveRaiser();
    this.retrieveState();
    this.retrieveParticipant();
    this.retrieveBalances();
  }

  retrieveRaiser() {
    const { account } = this.state;

    this.getContract().ws.methods
      .raiser()
      .call({
        from: account
      })
      .then(
        data => {
          this.setState({ raiser: parsers.parseRaiser(data) });
        },
        err => {
          console.error(err);
        }
      );
  }

  retrieveState() {
    const { account } = this.state;

    this.getContract().ws.methods
      .state()
      .call({
        from: account
      })
      .then(
        data => {
          this.setState({ state: parsers.parseState(data) });
        },
        err => {
          console.error(err);
        }
      );
  }

  retrieveParticipant() {
    const { account } = this.state;

    this.getContract().ws.methods
      .participantsMapping(account)
      .call({
        from: account
      })
      .then(
        data => {
          this.setState({ participant: parsers.parseParticipant(data) });
        },
        err => {
          console.error(err);
        }
      );
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
          balances[contractAddresses[i]] = value;
        }
      }
      this.setState({
        balances
      });
    });
  }

  setupEventsHandlers() {
    this.hybridWeb3.wsWeb3.eth.getBlockNumber((blockNumberError, blockNumber) => {
      const feedBlocksBack = (blockNumber < FEED_BLOCKS_BACK) ? 0 : FEED_BLOCKS_BACK;
      this.hybridWeb3.wsWeb3.eth.subscribe('logs', {
        address: [],
        from: blockNumber - feedBlocksBack
      }, (error, event) => {
        // first render old events
        if (event.blockNumber <= blockNumber) {
          this.triagePastEvent(event);
        } else {
          this.triageNewEvent(event);
        }
      });
    });
  }

  triagePastEvent(event) {
    const type = event.event.toLowerCase();
    const values = event.returnValues;

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
        return { feed: addFeedItem(prevState.feed, obj, type) };
      });
    }
  }

  triageNewEvent(event) {
    const { account, address } = this.state;
    const type = event.event.toLowerCase();
    const values = event.returnValues;

    switch (type) {
      case 'seed':
        this.handleSeedEvent(values);
        break;
      case 'participation':
        this.handleParticipationEvent(type, account, values);
        break;
      case 'raise':
        this.handleRaiseEvent(type, account, values);
        break;
      case 'revelation':
        this.handleRevelationEvent(type, account, values);
        break;
      case 'win':
        this.handleWinEvent(account, values);
        break;
      case 'cancellation':
        this.handleCancellationEvent();
        break;
      case 'withdrawal':
        this.handleWithdrawalEvent(account, values, address);
        break;
      default:
        break;
    }
  }

  handleSeedEvent(values) {
    const seed = parsers.parseSeed(values);
    this.setState((prevState) => ({
      state: { ...prevState.state, charityHashedRandom: seed.charityHashedRandom }
    }));
  }

  handleParticipationEvent(type, account, values) {
    const participation = parsers.parseParticipation(values);
    this.setState((prevState) => {
      const newState = {
        state: {
          ...prevState.state,
          totalParticipants: prevState.state.totalParticipants + 1,
          totalEntries: prevState.state.totalEntries + participation.entries,
        },
        feed: addFeedItem(prevState.feed, participation, type)
      };

      if (participation.participant === account) {
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

  handleRaiseEvent(type, account, values) {
    const raise = parsers.parseRaise(values);
    this.setState((prevState) => {
      const newState = {
        state: { ...prevState.state, totalEntries: prevState.state.totalEntries + raise.entries },
        feed: addFeedItem(prevState.feed, raise, type)
      };

      if (raise.participant === account) {
        newState.isLoading = { ...prevState.isLoading, isRaising: false };
        newState.participant = {
          ...prevState.participant,
          entries: prevState.participant.entries + raise.entries
        };
      }

      return newState;
    });
  }

  handleRevelationEvent(type, account, values) {
    const revelation = parsers.parseRevelation(values);
    this.setState((prevState) => {
      const newState = {
        state: { ...prevState.state, totalRevealed: prevState.state.totalRevealed + revelation.entries },
        feed: addFeedItem(prevState.feed, revelation, type)
      };

      if (revelation.participant === account) {
        newState.isLoading = { ...prevState.isLoading, isRevealing: false };
        newState.participant = { ...prevState.participant, random: revelation.random };
      }

      return newState;
    });
  }

  handleWinEvent(account, values) {
    const win = parsers.parseWin(values);
    this.setState((prevState) => {
      const newState = {
        state: {
          ...prevState.state,
          winner: win.participant,
          winnerRandom: win.random
        }
      };

      // update our winning balance
      if (win.participant === account) {
        const { raiser, state, contractAddress } = this.state;
        // preserve existing balances
        newState.balances = { ...prevState.balances };
        // add new balance entry
        newState.balances[contractAddress] = state.totalEntries * (raiser.winnerSplit / 1000);
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
      const { raiser, participant, contractAddress } = this.state;
      // add new balance entry
      newState.balances[contractAddress] = participant.entries * raiser.valuePerEntry;
      return newState;
    });
  }

  handleWithdrawalEvent(account, values, address) {
    const withdrawal = parsers.parseWithdrawal(values);
    // set our balance to zero if we withdrew
    if (withdrawal.participant === account) {
      this.setState((prevState) => {
        const newState = {
          isLoading: { ...prevState.isLoading, isWithdrawing: false },
          balances: { ...prevState.balances }
        };
        // delete balance entry for this contract addy
        delete newState.balances[address];
        return newState;
      });
    }
  }

  handleSend = (transaction, isLoadingName) => {
    this.setState((prevState) => {
      const newState = { isLoading: { ...prevState.isLoading } };
      newState.isLoading[isLoadingName] = true;
    }, () => {
      transaction
        .on('error', (error) => {
          const { message } = error;
          if (message.includes('User denied')) {
            this.setState((prevState) => {
              const newState = { isLoading: { ...prevState.isLoading } };
              newState.isLoading[isLoadingName] = false;
            });
          }
        });
    });
  }

  handleParticipate = ({ random, numOfEntries }) => {
    const { account, raiser } = this.state;
    const randomHex = randoms.hexRandom(random);
    const hashedRandom = randoms.hashRandom(randomHex, account);
    const value = numOfEntries * (raiser.valuePerEntry);

    this.handleSend(this.getContract().rpc.methods.participate(hashedRandom).send({
      from: account, value
    }), 'isParticipating');
  }

  handleRaise = (numOfEntries) => {
    const { account, raiser, contractAddress } = this.state;
    const value = numOfEntries * (raiser.valuePerEntry);

    this.handleSend(this.hybridWeb3.rpcWeb3.eth.sendTransaction({
      from: account, to: contractAddress, value
    }), 'isRaising');
  }

  handleReveal = (random) => {
    const { account } = this.state;
    const randomHex = randoms.hexRandom(random);

    this.handleSend(this.getContract().rpc.methods.reveal(randomHex).send({
      from: account
    }), 'isRevealing');
  }

  handleWithdraw = (contractAddress) => {
    const { account } = this.state;
    const contract = this.contracts[contractAddress];

    this.handleSend(contract.rpc.methods.withdraw().send({
      from: account
    }), 'isWithdrawing');
  }

  handleCancel = () => {
    const { account } = this.state;

    this.handleSend(this.getContract().rpc.methods.cancel().send({
      from: account
    }), 'isCancelling');
  }

  render() {
    const {
      hasMetamask,
      contractAddress,
      raiser,
      state,
      participant,
      balances,
      feed,
      isLoading
    } = this.state;

    const isReady = contractAddress && raiser && state && participant;

    let received;
    let charityReward;
    let winnerReward;
    if (isReady) {
      received = state.totalEntries * raiser.valuePerEntry;
      charityReward = received * (raiser.charitySplit / 1000);
      winnerReward = received * (raiser.winnerSplit / 1000);
    }

    return (
      <div className="seedom-dapp">
        {isReady &&
          <div className="dapp-container">
            <Hud
              side="left"
              received={received}
              charity={charityReward}
              winner={winnerReward}
            />
            <Puck
              hasMetamask={hasMetamask}
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
            <Hud
              side="right"
              participants={state.totalParticipants}
              entries={state.totalEntries}
              revealed={state.totalRevealed}
            />
          </div>
        }
        {isReady &&
          <div className="container">
            <div className="content has-text-centered">
              <Feed feed={feed} />
            </div>
          </div>
        }
        <div className="container">
          <div className="content has-text-centered">
            <p>
              View more live <strong>Seedom</strong> data on <a className="is-green" href={`https://etherscan.io/address/${contractAddress}`}>Etherscan</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dapp;
