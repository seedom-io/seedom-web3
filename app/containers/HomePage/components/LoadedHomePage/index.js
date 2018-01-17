import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Puck from '../../../../components/Puck';
import Hud from '../../../../components/Hud';
import Feed from '../../../../components/Feed';
import { rpcWeb3, wsWeb3 } from '../../../../utils/web3';
import hashRandom from '../../../../utils/hashRandom';
import testJSON from '../../../../../../seedom-solidity/deployment/test.json';
import * as parsers from './parsers';
import * as bytes from '../../../../utils/bytes';
import './index.scss';

import * as seedomActions from '../../../../redux/modules/seedom';

const MAX_FEED_ITEMS = 10;

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

@connect(
  state => ({
    participant: state.seedom.participant
  }),
  {
    ...seedomActions
  }
)
class LoadedHomePage extends React.Component {
  static propTypes = {
    hasMetamask: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      contractAddress: null,
      rpcContract: null,
      wsContract: null,
      isParticipating : false,
      ...getClearedState()
    };
  }

  componentWillMount() {
    this.setupContracts(() => {
      this.retrieveInitialData();
      this.setupEventsHandlers();
    });
  }

  setupContracts(done) {
    const contractAddress = testJSON.seedom[0].address;
    const { account, contract, hasMetamask } = this.props;

    let rpcContract;
    if (hasMetamask) {
      rpcContract = new rpcWeb3.eth.Contract(contract, contractAddress, {
        from: account,
        gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
      });
    } else {
      rpcContract = null;
    }

    const wsWeb3Instance = wsWeb3();
    const wsContract = new wsWeb3Instance.eth.Contract(contract, contractAddress, {
      from: account,
      gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    });

    this.setState({
      contractAddress,
      rpcContract,
      wsContract
    }, done);
  }

  retrieveInitialData() {
    this.retrieveRaiser();
    this.retrieveState();
    this.retrieveBalance();
    this.retrieveParticipant();
  }

  retrieveRaiser() {
    const { account } = this.props;

    this.state.wsContract.methods
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
    const { account } = this.props;

    this.state.wsContract.methods
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
    const { account } = this.props;

    this.state.wsContract.methods
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
    const { account } = this.props;

    this.state.wsContract.methods
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
    const wsWeb3Instance = wsWeb3();
    wsWeb3Instance.eth.getBlockNumber((blockNumberError, blockNumber) => {
      this.state.wsContract.getPastEvents({
        fromBlock: blockNumber - 500
      }, (pastEventsError, pastEvents) => {
        pastEvents.forEach(pastEvent => {
          this.triageEvent(pastEvent);
        });
      });
      this.state.wsContract.events.allEvents({
      }, (allEventsError, allEvent) => {
        this.triageEvent(allEvent);
      });
    });
  }

  triageEvent(event) {
    const { account } = this.props;

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
    this.setState({ cancelled: true });
  }

  handleWithdrawalEvent(account, values) {
    const withdrawal = parsers.parseWithdrawal(values);
    // set our balance to zero if we withdrew
    if (withdrawal.participant === account) {
      this.setState({ balance: 0 });
    }
  }

  handleParticipate = ({ random, numOfEntries }) => {
    const { account } = this.props;
    const { raiser, rpcContract } = this.state;

    const hashedRandom = hashRandom(random, account);
    const value = numOfEntries * (raiser.valuePerEntry);

    this.setState({
      isParticipating: true
    });

    rpcContract.methods
      .participate(hashedRandom.valueOf())
      .send({
        from: account,
        gas: 1000000,
        gasPrice: '20000000000', // default gas price in wei, 20 gwei in this case
        value
      })
      .then(result => {
        // if result.status === 0, this failed
        console.log('Participate succeeded');
        console.log(result);
      });
  }

  handleRaise = ({ numOfEntries }) => {
    const { account } = this.props;
    const { raiser, contractAddress } = this.state;

    const value = numOfEntries * (raiser.valuePerEntry);

    rpcWeb3.eth
      .sendTransaction({
        from: account,
        to: contractAddress,
        gas: 1000000,
        gasPrice: '20000000000',
        value
      })
      .then(result => {
        // if result.status === 0, this failed
        console.log('Raise succeeded');
        console.log(result);
      });
  }

  handleReveal = ({ random }) => {
    const { account } = this.props;
    const { rpcContract } = this.state;

    rpcContract.methods
      .reveal(random.valueOf())
      .send({
        from: account,
        gas: 1000000,
        gasPrice: '20000000000', // default gas price in wei, 20 gwei in this case
      })
      .then(result => {
        // if result.status === 0, this failed
        console.log('Reveal succeeded');
        console.log(result);
      });
  }

  handleWithdraw = () => {
    const { account } = this.props;
    const { rpcContract } = this.state;

    rpcContract.methods
      .withdraw()
      .send({
        from: account,
        gas: 1000000,
        gasPrice: '20000000000', // default gas price in wei, 20 gwei in this case
      })
      .then(result => {
        // if result.status === 0, this failed
        console.log('Withdraw succeeded');
        console.log(result);
      });
  }

  handleCancel = () => {
    const { account } = this.props;
    const { rpcContract } = this.state;

    rpcContract.methods
      .cancel()
      .send({
        from: account,
        gas: 1000000,
        gasPrice: '20000000000', // default gas price in wei, 20 gwei in this case
      })
      .then(result => {
        // if result.status === 0, this failed
        console.log('Cancel succeeded');
        console.log(result);
      });
  }

  render() {
    const { account, hasMetamask } = this.props;

    const {
      contractAddress,
      raiser,
      charityHashedRandom,
      hashedRandom,
      entries,
      winner,
      winnerRandom,
      balance,
      cancelled,
      totalParticipants,
      totalEntries,
      totalRevealed,
      feed,
      isParticipating
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
      <div className="seedom-app">
        <div className="seedom-container">
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
            winner={winner}
            winnerRandom={winnerRandom}
            balance={balance}
            cancelled={cancelled}
            isParticipating={isParticipating}
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

export default LoadedHomePage;
