import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';

import ParticipateForm from 'components/ParticipateForm';
import hashedRandom from 'utils/hashedRandom';
import web3, { isMetaMask, Web3v1 } from '../../web3';

import testJSON from '../../../../seedom-solidity/deployment/test.json';

import * as blockchainActions from '../../redux/modules/blockchain';
import * as seedomActions from '../../redux/modules/seedom';

let SeedomContract;

@provideHooks({
  fetch: ({ store: { dispatch, getState } }) =>
    !isInfoLoaded(getState()) ? dispatch(loadInfo()).catch(() => null) : Promise.resolve()
})

@connect(
  state => ({
    account: state.blockchain.account,
    participant: PropTypes.shape({
      _entries: PropTypes.number.isRequired,
      _hashedRandom: PropTypes.string.isRequired,
      _random: PropTypes.string.isRequired
    }).isRequired,
    totalParticipants: state.seedom.totalParticipants,
    valuePerEntry: state.seedom.valuePerEntry
  }),
  {
    ...blockchainActions,
    ...seedomActions
  }
)
export default class Seedom extends Component {
  static propTypes = {
    account: PropTypes.string.isRequired,
    totalParticipants: PropTypes.number.isRequired,
    valuePerEntry: PropTypes.number.isRequired,

    setAccount: PropTypes.func.isRequired,
    setParticipant: PropTypes.func.isRequired,
    setTotalParticipants: PropTypes.func.isRequired,
    setValuePerEntry: PropTypes.func.isRequired,
    loadContractABI: PropTypes.func.isRequired,
  }

  componentDidMount() {
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
      setValuePerEntry
    } = this.props;

    SeedomContract.methods.totalParticipants().call({
      from: account
    }).then(totalParticipants => {
      setTotalParticipants(totalParticipants);
    }, err => {
      console.error(err);
    });

    SeedomContract.methods.currentRaiser().call({
      from: account
    }).then(raiser => {
      setValuePerEntry(raiser._valuePerEntry);
    }, err => {
      console.error(err);
    });

    SeedomContract.methods.participant(account).call({
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
      SeedomContract = new web3.eth.Contract(
        abi,
        contractAddress,
        {
          from: account,
          gasPrice: '20000000000', // default gas price in wei, 20 gwei in this case
        }
      );

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
      totalParticipants,
      valuePerEntry
    } = this.props;

    const connectedWithMetaMask = isMetaMask();
    return (
      <div className="container">
        <Helmet title="Seedom" />
        <h1>Account</h1>
        <h2>{account}</h2>

        <h1>Total Participants</h1>
        <h2>{totalParticipants}</h2>

        <h1>Value Per Entry</h1>
        <h2>{valuePerEntry}</h2>

        <h1>Connected with metamask?</h1>
        <h2>{connectedWithMetaMask.toString()}</h2>

        <ParticipateForm
          valuePerEntry={valuePerEntry}
          onParticipate={this.handleParticipate}
        />
      </div>
    );
  }
}
