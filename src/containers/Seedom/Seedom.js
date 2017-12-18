import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import web3 from '../../web3';

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
    totalParticipants: state.seedom.totalParticipants
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

    setAccount: PropTypes.func.isRequired,
    setTotalParticipants: PropTypes.func.isRequired,
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
jjjjjjj
  updateWeb3Info = () => {
    const { account, setTotalParticipants } = this.props;

    SeedomContract.methods.totalParticipants().call({
      from: account
    }).then(result => {
      setTotalParticipants(result);
    }, err => {
      console.error(err);
    });

    // Also load past transactions array
    // this.loadPastTransactions();
  }

  initWeb3Subscriptions = () => {
    const { account, loadContractABI } = this.props;
    const contractAddress = testJSON.charity[0].address;

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


  render() {
    const { account, totalParticipants } = this.props;
    return (
      <div className="container">
        <Helmet title="About Us" />
        <h1>Account</h1>
        <h2>{account}</h2>

        <h1>Total Participants</h1>
        <h2>{totalParticipants}</h2>
      </div>
    );
  }
}
