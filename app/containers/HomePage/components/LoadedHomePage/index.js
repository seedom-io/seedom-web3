import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SeedomPuck from '../../../../components/SeedomPuck';
import { rpcWeb3, wsWeb3 } from '../../../../utils/web3';
import hashRandom from '../../../../utils/hashRandom';
import testJSON from '../../../../../../seedom-solidity/deployment/test.json';
import * as parsers from './parsers';

import * as seedomActions from '../../../../redux/modules/seedom';
import { setParticipant } from '../../../../redux/modules/seedom';

const getContractAddress = () => {
  return testJSON.seedom[0].address;
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
  constructor(props) {
    super(props);
    this.state = {
      rpcContract: null,
      wsContract: null,
      raiser: null
    };
  }

  componentWillMount() {
    this.setupContracts(() => {
      this.retrieveInitialData();
      this.setupEventsHandlers();
    });
  }

  setupContracts(done) {
    const contractAddress = getContractAddress();
    const { account, contract } = this.props;

    const rpcContract = new rpcWeb3.eth.Contract(contract, contractAddress, {
      from: account,
      gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    });

    const wsWeb3Instance = wsWeb3();
    const wsContract = new wsWeb3Instance.eth.Contract(contract, contractAddress, {
      from: account,
      gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    });

    this.setState({
      rpcContract,
      wsContract
    }, done);
  }

  retrieveInitialData() {
    this.retrieveCurrentRaiser();
    this.retrieveCharityHashedRandom();
    this.retrieveParticipant();
  }

  retrieveCurrentRaiser() {
    const { account } = this.props;

    this.state.wsContract.methods
      .currentRaiser()
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
        case 'Withdrawal':
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
    if (win.participant === account) {
      this.setState({
        winner: win.participant,
        winnerRandom: win.random
      });
    }
  }

  handleParticipate = ({ random, numOfEntries }) => {
    const { account } = this.props;
    const { raiser, rpcContract } = this.state;

    const hashedRandom = hashRandom(random, account);
    const value = numOfEntries * (raiser.valuePerEntry);

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
    const { raiser } = this.state;

    const contractAddress = getContractAddress();
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

  render() {
    const { account } = this.props;
    const {
      raiser,
      charityHashedRandom,
      hashedRandom,
      entries,
      random,
      winner,
      winnerRandom
    } = this.state;

    return (
      <div>
        <h2>Welcome to Seedom</h2>
        <p>
          <strong>Account:</strong> {account}
        </p>
        {raiser &&
          <SeedomPuck
            raiser={raiser}
            charityHashedRandom={charityHashedRandom}
            hashedRandom={hashedRandom}
            entries={entries}
            winner={winner}
            winnerRandom={winnerRandom}
            onParticipate={this.handleParticipate}
            onRaise={this.handleRaise}
            onReveal={this.handleReveal}
            onWithdraw={this.handleWithdraw}
          />
        }
      </div>
    );
  }
}

export default LoadedHomePage;
