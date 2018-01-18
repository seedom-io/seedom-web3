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
    this.hybridWeb3 = new HybridWeb3(null, this.handleHybridWeb3Event);
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
    // new events
    this.wsContract.events.allEvents({
    }, (error, event) => {
      this.triageEvent(event);
    });
  }

  triageEvent(event) {
    const { account } = this.state;

    const type = event.event;
    const values = event.returnValues;
    switch (type) {
      case 'Kickoff':
        this.handleKickoffEvent(values);
        break;
      case 'Seed':
        this.handleSeedEvent(values);
        break;
      case 'Participation':
        this.handleParticipationEvent(account, values);
        break;
      case 'Raise':
        this.handleRaiseEvent(account, values);
        break;
      case 'Revelation':
        this.handleRevelationEvent(account, values);
        break;
      case 'Win':
        this.handleWinEvent(account, values);
        break;
      case 'Cancellation':
        this.handleCancellationEvent();
        break;
      case 'Withdrawal':
        this.handleWithdrawalEvent();
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

  handleParticipationEvent(account, values) {
    const participation = parsers.parseParticipation(values);
    this.setState((prevState) => {
      const newState = {
        totalParticipants: prevState.totalParticipants + 1,
        totalEntries: prevState.totalEntries + participation.entries,
        feed: addFeedItem(prevState.feed, participation, 'participation')
      };

      if (participation.participant === account) {
        newState.isParticipating = false;
        newState.entries = participation.entries;
        newState.hashedRandom = participation.hashedRandom;
      }

      return newState;
    });
  }

  handleRaiseEvent(account, values) {
    const raise = parsers.parseRaise(values);
    this.setState((prevState) => {
      const newState = {
        totalEntries: prevState.totalEntries + raise.entries,
        feed: addFeedItem(prevState.feed, raise, 'raise')
      };

      if (raise.participant === account) {
        newState.isRaising = false;
        newState.entries = prevState.entries + raise.entries;
      }

      return newState;
    });
  }

  handleRevelationEvent(account, values) {
    const revelation = parsers.parseRevelation(values);
    this.setState((prevState) => {
      const newState = {
        totalRevealed: prevState.totalRevealed + revelation.entries,
        feed: addFeedItem(prevState.feed, revelation, 'revelation')
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

  handleParticipate = ({ random, numOfEntries }, done) => {
    const { account, raiser } = this.state;

    const randomHex = randoms.hexRandom(random);
    const hashedRandom = randoms.hashRandom(randomHex, account);
    const value = numOfEntries * (raiser.valuePerEntry);

    this.setState({ isParticipating: true }, () => {
      this.rpcContract.methods
        .participate(hashedRandom)
        .send({
          from: account,
          value
        })
        .on('error', (error) => {
          console.log(error);
        })
        .on('confirmation', (error) => {
          console.log(error);
        });
    }, done);
  }

  handleRaise = ({ numOfEntries }, done) => {
    const { account, raiser, contractAddress } = this.state;

    const value = numOfEntries * (raiser.valuePerEntry);

    this.setState({ isRaising: true }, () => {
      this.hybridWeb3.rpcWeb3.eth
        .sendTransaction({
          from: account,
          to: contractAddress,
          value
        })
        .then(result => {
          // if result.status === 0, this failed
          console.log('Raise succeeded');
          console.log(result);
        });
    }, done);
  }

  handleReveal = ({ random }, done) => {
    const { account } = this.state;

    const randomHex = randoms.hexRandom(random);

    this.setState({ isRevealing: true }, () => {
      this.rpcContract.methods
        .reveal(randomHex)
        .send({
          from: account
        })
        .then(result => {
          // if result.status === 0, this failed
          console.log('Reveal succeeded');
          console.log(result);
        });
    }, done);
  }

  handleWithdraw = (done) => {
    const { account } = this.state;

    this.setState({ isWithdrawing: true }, () => {
      this.rpcContract.methods
        .withdraw()
        .send({
          from: account
        })
        .then(result => {
          // if result.status === 0, this failed
          console.log('Withdraw succeeded');
          console.log(result);
        });
    }, done);
  }

  handleCancel = (done) => {
    const { account } = this.state;

    this.setState({ isCancelling: true }, () => {
      this.rpcContract.methods
        .cancel()
        .send({
          from: account
        })
        .then(result => {
          // if result.status === 0, this failed
          console.log('Cancel succeeded');
          console.log(result);
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
