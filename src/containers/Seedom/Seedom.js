import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';


import Participate from 'containers/Participate';

import hashedRandom from 'utils/hashedRandom';
import web3, { isMetaMask } from '../../web3';

import testJSON from '../../../../seedom-solidity/deployment/test.json';

import * as blockchainActions from '../../redux/modules/blockchain';
import * as seedomActions from '../../redux/modules/seedom';


let SeedomContract;

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
      hashedRandom: PropTypes.string.isRequired
    }).isRequired,
    phase: PropTypes.string.isRequired,
    totalParticipants: PropTypes.number.isRequired,
    valuePerEntry: PropTypes.number.isRequired,

    setAccount: PropTypes.func.isRequired,
    setParticipant: PropTypes.func.isRequired,
    setTotalParticipants: PropTypes.func.isRequired,
    setRaiser: PropTypes.func.isRequired,
    loadContractABI: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      contract: null
    };
  }

  componentWillMount() {
    // Get and set account if it hasn't been set yet
    if (this.props.account.length === 0) {
      web3.eth.getAccounts().then(accounts => {
        const account = accounts[0];
        this.props.setAccount(account);
        // Set default address
        web3.eth.defaultAccount = account;
        this.initWeb3Subscriptions();
      });
    } else {
      this.initWeb3Subscriptions();
    }
  }

  updateWeb3Info = () => {
    const {
      account,
      setParticipant,
      setTotalParticipants,
      setRaiser
    } = this.props;

    this.state.contract.methods.totalParticipants().call({
      from: account
    }).then(totalParticipants => {
      setTotalParticipants(totalParticipants);
    }, err => {
      console.error(err);
    });

    this.state.contract.methods.currentRaiser().call({
      from: account
    }).then(raiser => {
      setRaiser(raiser);
    }, err => {
      console.error(err);
    });

    this.state.contract.methods.participant(account).call({
      from: account
    }).then(participant => {
      setParticipant(participant);
    }, err => {
      console.error(err);
    });

    // Also load past transactions array
    // this.loadPastTransactions();
  }

  initWeb3Subscriptions = () => {
    const { account, loadContractABI } = this.props;
    const contractAddress = testJSON.seedom[0].address;

    loadContractABI('seedom').then(abi => {
      // Create an instance of the contract
      const contract = new web3.eth.Contract(
        abi,
        contractAddress,
        {
          from: account,
          gasPrice: '20000000000', // default gas price in wei, 20 gwei in this case
        }
      );

      this.setState({
        contract
      });

      web3.eth.subscribe('newBlockHeaders', (/* err, results */) => {
        this.updateWeb3Info();
      });

      // Initial call
      this.updateWeb3Info();
    });
  }

  handleParticipate = ({ seed, numOfEntries }) => {
    const {
      account,
      valuePerEntry
    } = this.props;

    const hashedSeed = hashedRandom(seed, account);
    const value = numOfEntries * valuePerEntry;

    SeedomContract.methods.participate(hashedSeed.valueOf()).send({
      from: account,
      gas: 1000000,
      gasPrice: '20000000000', // default gas price in wei, 20 gwei in this case
      value
    }).then(result => {
      // if result.status === 0, this failed
      console.log('Participate succeeded');
      console.log(result);
    }).catch(err => {
      console.log('Participate failed');
      console.log(err);
    });
  }

  render() {
    const {
      account,
      phase,
      participant,
      totalParticipants,
      valuePerEntry
    } = this.props;

    const { contract } = this.state;

    const connectedWithMetaMask = isMetaMask();

    let phaseComponent = null;

    // TODO - this is gross
    if (contract) {
      switch (phase) {
        case PHASES.PARTICIPATION:
          phaseComponent = (
            <Participate
              account={account}
              contract={contract}
              participant={participant}
              valuePerEntry={valuePerEntry}
            />
          );
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
          <strong>Connected with metamask?</strong> {connectedWithMetaMask.toString()}
        </p>

        <p>
          <strong>Phase:</strong> {phaseFor(phase)}
        </p>

        {phaseComponent}
      </div>
    );
  }
}
