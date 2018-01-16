import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SeedomPuck from '../../../../components/SeedomPuck';
import SeedomHud from '../../../../components/SeedomHud';
import SeedomFeed from '../../../../components/SeedomFeed';
import { rpcWeb3, wsWeb3 } from '../../../../utils/web3';
import hashRandom from '../../../../utils/hashRandom';
import testJSON from '../../../../../../seedom-solidity/deployment/test.json';
import * as parsers from './parsers';
import * as bytes from '../../../../utils/bytes';
import './index.scss';

import * as seedomActions from '../../../../redux/modules/seedom';

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
      raiser: null,
      isParticipating: false
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
    this.retrieveCurrentRaiser(() => {
      this.retrieveBalance();
      this.retrieveCancelled(() => {
        this.retrieveCharityHashedRandom();
        this.retrieveParticipant();
        this.retrieveWinner(() => {
          this.retrieveWinnerRandom();
        });
      });
    });
  }

  retrieveCurrentRaiser(next) {
    const { account } = this.props;

    this.state.wsContract.methods
      .currentRaiser()
      .call({
        from: account
      })
      .then(
        data => {
          this.setState({ raiser: parsers.parseRaiser(data) });
          next();
        },
        err => {
          console.error(err);
        }
      );
  }

  retrieveBalance() {
    const { account } = this.props;

    this.state.wsContract.methods
      .balance(account)
      .call({
        from: account
      })
      .then(
        data => {
          this.setState({ balance: data });
        },
        err => {
          console.error(err);
        }
      );
  }

  retrieveCancelled(next) {
    const { account } = this.props;

    this.state.wsContract.methods
      .cancelled()
      .call({
        from: account
      })
      .then(
        data => {
          this.setState({ cancelled: data });
          if (!data) {
            next();
          }
        },
        err => {
          console.error(err);
        }
      );
  }

  retrieveCharityHashedRandom() {
    const { account } = this.props;

    this.state.wsContract.methods
      .charityHashedRandom()
      .call({
        from: account
      })
      .then(
        data => {
          this.setState({ charityHashedRandom: data });
        },
        err => {
          console.error(err);
        }
      );
  }

  retrieveParticipant() {
    const { account } = this.props;

    this.state.wsContract.methods
      .participant(account)
      .call({
        from: account
      })
      .then(
        data => {
          const participant = parsers.parseParticipant(data);
          this.setState({
            entries: participant.entries,
            hashedRandom: participant.hashedRandom,
            random: participant.random
          });
        },
        err => {
          console.error(err);
        }
      );
  }

  retrieveWinner(next) {
    const { account } = this.props;

    this.state.wsContract.methods
      .winner()
      .call({
        from: account
      })
      .then(
        data => {
          this.setState({ winner: data });
          if (!bytes.isZero20(data)) {
            next();
          }
        },
        err => {
          console.error(err);
        }
      );
  }

  retrieveWinnerRandom() {
    const { account } = this.props;
    const { winner } = this.state;

    this.state.wsContract.methods
      .participant(winner)
      .call({
        from: account
      })
      .then(
        data => {
          const participant = parsers.parseParticipant(data);
          this.setState({ winnerRandom: participant.winnerRandom });
        },
        err => {
          console.error(err);
        }
      );
  }

  setupEventsHandlers() {
    const { account } = this.props;

    this.state.wsContract.events.allEvents({}, (error, event) => {
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
    });
  }

  handleKickoffEvent(values) {
    this.setState({ raiser: parsers.parseRaiser(values) });
  }

  handleSeedEvent(values) {
    const seed = parsers.parseSeed(values);
    this.setState({ charityHashedRandom: seed.hashedRandom });
  }

  handleParticipationEvent(account, values) {
    const participation = parsers.parseParticipation(values);
    if (participation.participant === account) {
      this.setState({
        isParticipating: false,
        entries: participation.entries,
        hashedRandom: participation.hashedRandom
      });
    }
  }

  handleRaiseEvent(account, values) {
    const raise = parsers.parseRaise(values);
    if (raise.participant === account) {
      this.setState({
        entries: this.state.entries + raise.entries
      });
    }
  }

  handleRevelationEvent(account, values) {
    const revelation = parsers.parseRevelation(values);
    if (revelation.participant === account) {
      this.setState({
        random: revelation.random
      });
    }
  }

  handleWinEvent(account, values) {
    const win = parsers.parseWin(values);

    const newState = {
      winner: win.participant,
      winnerRandom: win.random
    };

    // update our balance if
    if (win.participant === account) {
      newState.balance = this.state.balance + win.winnerReward;
    }

    this.setState(newState);
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
      raiser,
      charityHashedRandom,
      hashedRandom,
      entries,
      winner,
      winnerRandom,
      balance,
      cancelled,
      isParticipating
    } = this.state;

    return (
      <div className="seedom-app">
        {raiser &&
          <div className="seedom-container">
            <SeedomHud side="left" received={5000} charity={3000} winner={2000} />
            <SeedomPuck
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
            <SeedomHud side="right" participants={576} entries={15834} revealed={14000} />
          </div>
        }
        <div className="container">
          <div className="content has-text-centered">
            <SeedomFeed />
          </div>
        </div>
        <div className="container">
          <div className="content has-text-centered">
            <p>
              View more live <strong>Seedom</strong> data on <a className="is-green" href={`https://etherscan.io/address/${this.state.contractAddress}`}>Etherscan</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadedHomePage;
