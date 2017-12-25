import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';

import Participate from 'containers/Participate';
import Reveal from 'containers/Reveal';

import hashedRandom from 'utils/hashedRandom';
import { rpcWeb3, wsWeb3 } from '../../web3';

import testJSON from '../../../../seedom-solidity/deployment/test.json';

import * as blockchainActions from '../../redux/modules/blockchain';
import * as seedomActions from '../../redux/modules/seedom';

const PHASES = {
  PARTICIPATION: 'PARTICIPATION',
  REVEAL: 'REVEAL',
  END: 'END'
};

const getPhase = raiser => {
  const now = Date.now();

  if (now > raiser.kickoffTime && now < raiser.revealTime) {
    return PHASES.PARTICIPATION;
  } else if (now > raiser.revealTime && now < raiser.endTime) {
    return PHASES.REVEAL;
  }

  return PHASES.END;
};

const phaseFor = phase => {
  switch (phase) {
    case PHASES.PARTICIPATION:
      return 'Participation';
    case PHASES.REVEAL:
      return 'Reveal';
    case PHASES.END:
      return 'End';
    default:
      return 'Unknown';
  }
};

@provideHooks({
  fetch: ({ store: { dispatch, getState } }) =>
    !isInfoLoaded(getState()) ? dispatch(loadInfo()).catch(() => null) : Promise.resolve()
})
@connect(
  state => ({
    account: state.blockchain.account,
    participant: state.seedom.participant,
    phase: getPhase(state.seedom.raiser),
    raiser: state.seedom.raiser,
    totalParticipants: state.seedom.totalParticipants,
    valuePerEntry: state.seedom.raiser.valuePerEntry
  }),
  {
    ...blockchainActions,
    ...seedomActions
  }
)
export default class Seedom extends Component {
  static propTypes = {
    account: PropTypes.string.isRequired,
    participant: PropTypes.shape({
      entries: PropTypes.number.isRequired,
      hashedRandom: PropTypes.string.isRequired
    }).isRequired,
    phase: PropTypes.string.isRequired,
    raiser: PropTypes.shape({
      endTime: PropTypes.instanceOf(Date),
      expireTime: PropTypes.instanceOf(Date),
      kickoffTime: PropTypes.instanceOf(Date),
      revealTime: PropTypes.instanceOf(Date),
      valuePerEntry: 0
    }).isRequired,
    totalParticipants: PropTypes.number.isRequired,
    valuePerEntry: PropTypes.number.isRequired,
    setAccount: PropTypes.func.isRequired,
    setParticipant: PropTypes.func.isRequired,
    setTotalParticipants: PropTypes.func.isRequired,
    setRaiser: PropTypes.func.isRequired,
    loadContractABI: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      rpcContract: null,
      wsContract: null
    };
  }

  componentWillMount() {
    this.initWeb3();
  }

  setupEventsHandlers = () => {
    const { setRaiser } = this.props;

    this.state.wsContract.events.allEvents({}, event => {
      switch (event.event) {
        case 'Kickoff':
          setRaiser(event.returnValues);
          break;
        case 'Participation':
          this.handleParticipation(event.returnValues);
          break;
        case 'Raise':
        case 'Revelation':
        case 'WinInput':
        case 'WinSearch':
        case 'Win':
        case 'Cancellation':
        case 'Withdrawal':
        default:
          break;
      }
    });
  };

  updateInitially = () => {
    const {
      account, setParticipant, setTotalParticipants, setRaiser
    } = this.props;

    this.state.wsContract.methods
      .totalParticipants()
      .call({
        from: account
      })
      .then(
        totalParticipants => {
          setTotalParticipants(totalParticipants);
        },
        err => {
          console.error(err);
        }
      );

    this.state.wsContract.methods
      .currentRaiser()
      .call({
        from: account
      })
      .then(
        raiser => {
          setRaiser(raiser);
        },
        err => {
          console.error(err);
        }
      );

    this.state.wsContract.methods
      .participant(account)
      .call({
        from: account
      })
      .then(
        participant => {
          setParticipant(participant);
        },
        err => {
          console.error(err);
        }
      );
  };

  handleParticipation = participation => {
    const { account } = this.props;
    if (participation._participant === account) {
      // handle our participation success
    } else {
      // update leaderboard
    }
  };

  initWeb3 = () => {
    const { loadContractABI } = this.props;

    let account;
    // Get and set account if it hasn't been set yet
    if (this.props.account.length === 0) {
      rpcWeb3.eth.getAccounts().then(accounts => {
        [account] = accounts;
        rpcWeb3.eth.defaultAccount = account;
        this.props.setAccount(account);
      });
    }

    const contractAddress = testJSON.seedom[0].address;

    loadContractABI('seedom').then(abi => {
      const rpcContract = new rpcWeb3.eth.Contract(abi, contractAddress, {
        from: account,
        gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
      });

      const wsWeb3Instance = wsWeb3();
      const wsContract = new wsWeb3Instance.eth.Contract(abi, contractAddress, {
        from: account,
        gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
      });

      this.setState({
        rpcContract,
        wsContract
      });

      this.updateInitially();
      this.setupEventsHandlers();
    });
  };

  handleParticipate = ({ seed, numOfEntries }) => {
    const { account, valuePerEntry } = this.props;

    const hashedSeed = hashedRandom(seed, account);
    const value = numOfEntries * valuePerEntry;

    this.state.rpcContract.methods
      .participate(hashedSeed.valueOf())
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
      })
      .catch(err => {
        console.log('Participate failed');
        console.log(err);
      });
  };

  render() {
    const {
      account, phase, participant, raiser, totalParticipants, valuePerEntry
    } = this.props;

    const { rpcContract } = this.state;

    let phaseComponent = null;

    // TODO - this is gross
    if (rpcContract) {
      switch (phase) {
        case PHASES.PARTICIPATION:
          phaseComponent = (
            <Participate
              account={account}
              contract={rpcContract}
              participant={participant}
              valuePerEntry={valuePerEntry}
            />
          );
          break;

        case PHASES.REVEAL:
          phaseComponent = <Reveal account={account} contract={rpcContract} />;
          break;

        default:
          phaseComponent = null;
          break;
      }
    }

    return (
      <div className="container">
        <Helmet title="Seedom" />

        <br />
        <br />

        <p>
          <strong>Account:</strong> {account}
        </p>

        <p>
          <strong>Total Participants:</strong> {totalParticipants}
        </p>

        <p>
          <strong>Value Per Entry:</strong> {valuePerEntry}
        </p>

        <p>
          <strong>Phase:</strong> {phaseFor(phase)}
        </p>

        {phaseComponent}

        {participant && (
          <div>
            <h3>Participant attrs</h3>
            <p>
              <strong>Entries:</strong> {participant.entries}
            </p>
          </div>
        )}

        {raiser && (
          <div>
            <h3>Raiser attrs</h3>
            <p>
              <strong>Kickoff time:</strong> {raiser.kickoffTime.toString()}
            </p>
            <p>
              <strong>Reveal time:</strong> {raiser.revealTime.toString()}
            </p>
            <p>
              <strong>End time:</strong> {raiser.endTime.toString()}
            </p>
          </div>
        )}
      </div>
    );
  }
}
