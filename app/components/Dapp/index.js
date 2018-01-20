import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Puck from './components/Puck';
import Hud from './components/Hud';
import Feed from './components/Feed';
import HybridWeb3 from './utils/hybridWeb3';
import * as randoms from './utils/randoms';
import contractAbi from '../../../../seedom-solidity/build/abi/seedom.json';
import contractDeployments from '../../../../seedom-solidity/deployment/test.json';
import * as parsers from './utils/parsers';
import * as bytes from './utils/bytes';
import './index.scss';

const MAX_FEED_ITEMS = 10;
const GAS = 2000000;
const GAS_PRICE = 20000000000;
const FEED_BLOCKS_BACK = 1000;

const addFeedItem = (feed, obj, type) => {
  const feedItem = { type, ...obj };
  const newFeed = feed.slice(0, MAX_FEED_ITEMS);
  newFeed.unshift(feedItem);
  return newFeed;
};

const getClearedState = () => {
  return {
    entries: 0,
    hashedRandom: bytes.zero32,
    random: bytes.zero32,
    charityHashedRandom: bytes.zero32,
    winner: bytes.zero20,
    winnerRandom: bytes.zero32,
    cancelled: false,
    totalParticipants: 0,
    totalEntries: 0,
    totalRevealers: 0,
    totalRevealed: 0,
    feed: []
  };
};

class Dapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractAddress: null,
      isParticipating: false,
      isRaising: false,
      isRevealing: false,
      isWithdrawing: false,
      isCancelling: false,
      ...getClearedState()
    };
  }

  componentWillMount() {
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
    const contractAddress = contractDeployments.seedom[0].address;

    this.rpcContract = new this.hybridWeb3.rpcWeb3.eth.Contract(contractAbi, contractAddress, {
      from: this.state.account,
      gas: GAS,
      gasPrice: GAS_PRICE
    });

    this.wsContract = new this.hybridWeb3.wsWeb3.eth.Contract(contractAbi, contractAddress, {
      from: this.state.account,
      gas: GAS,
      gasPrice: GAS_PRICE
    });

    this.setState({
      contractAddress,
    }, done);
  }

  retrieveInitialData() {
    this.retrieveRaiser();
    this.retrieveState();
    this.retrieveBalance();
    this.retrieveParticipant();
  }

  retrieveRaiser() {
    const { account } = this.state;

    this.wsContract.methods
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

    this.wsContract.methods
      .state()
      .call({
        from: account
      })
      .then(
        data => {
          this.setState(parsers.parseState(data));
        },
        err => {
          console.error(err);
        }
      );
  }

  retrieveBalance() {
    const { account } = this.state;

    this.wsContract.methods
      .balancesMapping(account)
      .call({
        from: account
      })
      .then(
        data => {
          this.setState({ balance: parseInt(data, 10) });
        },
        err => {
          console.error(err);
        }
      );
  }

  retrieveParticipant() {
    const { account } = this.state;

    this.wsContract.methods
      .participantsMapping(account)
      .call({
        from: account
      })
      .then(
        data => {
          this.setState(parsers.parseParticipant(data));
        },
        err => {
          console.error(err);
        }
      );
  }

  setupEventsHandlers() {
    this.hybridWeb3.wsWeb3.eth.getBlockNumber((blockNumberError, blockNumber) => {
      const feedBlocksBack = (blockNumber < FEED_BLOCKS_BACK) ? 0 : FEED_BLOCKS_BACK;
      // get past events
      this.wsContract.getPastEvents({
        fromBlock: feedBlocksBack
      }, (pastEventsError, pastEvents) => {
        // first render old events
        if (pastEvents) {
          pastEvents.forEach(pastEvent => {
            this.triagePastEvent(pastEvent);
          });
        }
        // now listen for new events
        this.wsContract.events.allEvents({
        }, (allEventsError, allEvent) => {
          this.triageNewEvent(allEvent);
        });
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
    const { account } = this.state;
    const type = event.event.toLowerCase();
    const values = event.returnValues;

    switch (type) {
      case 'kickoff':
        this.handleKickoffEvent(values);
        break;
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
        this.handleWithdrawalEvent(account, values);
        break;
      default:
        break;
    }
  }

  handleKickoffEvent(values) {
    this.setState({
      raiser: parsers.parseRaiser(values),
      ...getClearedState()
    });
  }

  handleSeedEvent(values) {
    const seed = parsers.parseSeed(values);
    this.setState({ charityHashedRandom: seed.hashedRandom });
  }

  handleParticipationEvent(type, account, values) {
    const participation = parsers.parseParticipation(values);
    this.setState((prevState) => {
      const newState = {
        totalParticipants: prevState.totalParticipants + 1,
        totalEntries: prevState.totalEntries + participation.entries,
        feed: addFeedItem(prevState.feed, participation, type)
      };

      if (participation.participant === account) {
        newState.isParticipating = false;
        newState.entries = participation.entries;
        newState.hashedRandom = participation.hashedRandom;
      }

      return newState;
    });
  }

  handleRaiseEvent(type, account, values) {
    const raise = parsers.parseRaise(values);
    this.setState((prevState) => {
      const newState = {
        totalEntries: prevState.totalEntries + raise.entries,
        feed: addFeedItem(prevState.feed, raise, type)
      };

      if (raise.participant === account) {
        newState.isRaising = false;
        newState.entries = prevState.entries + raise.entries;
      }

      return newState;
    });
  }

  handleRevelationEvent(type, account, values) {
    const revelation = parsers.parseRevelation(values);
    this.setState((prevState) => {
      const newState = {
        totalRevealed: prevState.totalRevealed + revelation.entries,
        feed: addFeedItem(prevState.feed, revelation, type)
      };

      if (revelation.participant === account) {
        newState.isRevealing = false;
        newState.random = revelation.random;
      }

      return newState;
    });
  }

  handleWinEvent(account, values) {
    const win = parsers.parseWin(values);
    this.setState((prevState) => {
      const newState = {
        winner: win.participant,
        winnerRandom: win.random
      };
      // update our balance
      if (win.participant === account) {
        newState.balance = prevState.balance + win.winnerReward;
      }

      return newState;
    });
  }

  handleCancellationEvent() {
    this.setState({
      isCancelling: false,
      cancelled: true
    });
  }

  handleWithdrawalEvent(account, values) {
    const withdrawal = parsers.parseWithdrawal(values);
    // set our balance to zero if we withdrew
    if (withdrawal.participant === account) {
      this.setState({
        isWithdrawing: false,
        balance: 0
      });
    }
  }

  handleSend = (transaction, cancelled) => {
    transaction
      .on('error', (error) => {
        const { message } = error;
        if (message.includes('User denied')) {
          cancelled();
        }
      });
  }

  handleParticipate = ({ random, numOfEntries }, done) => {
    const { account, raiser } = this.state;
    const randomHex = randoms.hexRandom(random);
    const hashedRandom = randoms.hashRandom(randomHex, account);
    const value = numOfEntries * (raiser.valuePerEntry);

    this.setState({ isParticipating: true }, () => {
      this.handleSend(this.rpcContract.methods.participate(hashedRandom).send({
        from: account, value
      }), () => {
        this.setState({ isParticipating: false });
      });
    }, done);
  }

  handleRaise = ({ numOfEntries }, done) => {
    const { account, raiser, contractAddress } = this.state;
    const value = numOfEntries * (raiser.valuePerEntry);

    this.setState({ isRaising: true }, () => {
      this.handleSend(this.hybridWeb3.rpcWeb3.eth.sendTransaction({
        from: account, to: contractAddress, value
      }), () => {
        this.setState({ isRaising: false });
      });
    }, done);
  }

  handleReveal = ({ random }, done) => {
    const { account } = this.state;
    const randomHex = randoms.hexRandom(random);

    this.setState({ isRevealing: true }, () => {
      this.handleSend(this.rpcContract.methods.reveal(randomHex).send({
        from: account
      }), () => {
        this.setState({ isRevealing: false });
      });
    }, done);
  }

  handleWithdraw = (done) => {
    const { account } = this.state;

    this.setState({ isWithdrawing: true }, () => {
      this.handleSend(this.rpcContract.methods.withdraw().send({
        from: account
      }), () => {
        this.setState({ isWithdrawing: false });
      });
    }, done);
  }

  handleCancel = (done) => {
    const { account } = this.state;

    this.setState({ isCancelling: true }, () => {
      this.handleSend(this.rpcContract.methods.cancel().send({
        from: account
      }), () => {
        this.setState({ isWithdrawing: false });
      });
    }, done);
  }

  render() {
    const {
      hasMetamask,
      contractAddress,
      raiser,
      charityHashedRandom,
      hashedRandom,
      entries,
      random,
      winner,
      winnerRandom,
      balance,
      cancelled,
      totalParticipants,
      totalEntries,
      totalRevealed,
      feed,
      isParticipating,
      isRaising,
      isRevealing,
      isWithdrawing,
      isCancelling
    } = this.state;

    let received = 0;
    let charityReward = 0;
    let winnerReward = 0;
    if (raiser) {
      received = this.state.totalEntries * raiser.valuePerEntry;
      charityReward = received * (raiser.charitySplit / 1000);
      winnerReward = received * (raiser.winnerSplit / 1000);
    }

    return (
      <div className="seedom-dapp">
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
            charityHashedRandom={charityHashedRandom}
            hashedRandom={hashedRandom}
            entries={entries}
            random={random}
            winner={winner}
            winnerRandom={winnerRandom}
            balance={balance}
            cancelled={cancelled}
            isParticipating={isParticipating}
            isRaising={isRaising}
            isRevealing={isRevealing}
            isWithdrawing={isWithdrawing}
            isCancelling={isCancelling}
            onParticipate={this.handleParticipate}
            onRaise={this.handleRaise}
            onReveal={this.handleReveal}
            onWithdraw={this.handleWithdraw}
            onCancel={this.handleCancel}
          />
          <Hud
            side="right"
            participants={totalParticipants}
            entries={totalEntries}
            revealed={totalRevealed}
          />
        </div>
        <div className="container">
          <div className="content has-text-centered">
            <Feed feed={feed} />
          </div>
        </div>
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