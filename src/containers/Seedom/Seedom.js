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
    coinbase: state.blockchain.coinbase,
    amountToSend: state.seedom.amountToSend,
    addressToSend: state.seedom.addressToSend,
    pastTransactions: state.seedom.pastTransactions
  }),
  {
    ...blockchainActions,
    ...seedomActions
  }
)
export default class Seedom extends Component {
  static propTypes = {
    coinbase: PropTypes.string.isRequired,
    setCoinbase: PropTypes.func.isRequired,
    setTotalParticipants: PropTypes.func.isRequired,
    loadContractABI: PropTypes.func.isRequired,
  }

  componentDidMount() {
    // Get and set coinbase if it hasn't been set yet
    if (this.props.coinbase.length === 0) {
      web3.eth.getCoinbase().then(coinbase => {
        this.props.setCoinbase(coinbase);
        // Set default address
        web3.eth.defaultAccount = coinbase;
        this.initWeb3Subscriptions();
      });
    } else {
      this.initWeb3Subscriptions();
    }
  }

  updateWeb3Info = () => {
    const { coinbase, setTotalParticipants } = this.props;

    SeedomContract.methods.totalParticipants().call({
      from: coinbase
    }).then(result => {
      setTotalParticipants(result);
    }, err => {
      console.error(err);
    });

    // Also load past transactions array
    // this.loadPastTransactions();
  }

  initWeb3Subscriptions = () => {
    const { coinbase, loadContractABI } = this.props;
    const contractAddress = testJSON.charity[0].address;

    loadContractABI('seedom').then(abi => {
      // Create an instance of the contract
      SeedomContract = new web3.eth.Contract(
        abi,
        contractAddress,
        {
          from: coinbase,
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
    return (
      <div className="container">
        <h1>About Us</h1>
        <Helmet title="About Us" />
      </div>
    );
  }
}
