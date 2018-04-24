import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './components/header';
import Puck from './components/puck';
import Stats from './components/stats';
import Feed from './components/feed';
import About from './components/about';
import * as bytes from '../../utils/bytes';
import * as messages from '../../../../seedom-crypter/messages';
import * as etherscan from '../../utils/etherscan';
import * as ethereumActions from '../../actions/ethereum';
import './index.scss';

class Participate extends Component {
  static propTypes = {
    ethereum: PropTypes.shape().isRequired
  };

  handleParticipate = ({ message, entries }) => {
    const { deployment } = this.props.ethereum;
    const messageHex = messages.hex((message);
    const value = entries.times(deployment.valuePerEntry);
    this.props.dispatch(ethereumActions.send({
      contractName: 'fundraiser', method: 'participate', args: [messageHex], value
    }));
  };

  handleRaise = (entries) => {
    const { deployment } = this.props.ethereum;
    const value = entries.times(deployment.valuePerEntry);
    this.props.dispatch(ethereumActions.send({
      contractName: 'fundraiser', value
    }));
  };

  handleWithdraw = (contractAddress) => {
    this.props.dispatch(ethereumActions.send({
      contractName: 'fundraiser', contractAddress, method: 'withdraw'
    }));
  };

  handleCancel = () => {
    this.props.dispatch(ethereumActions.send({
      contractName: 'fundraiser', method: 'cancel'
    }));
  };

  render() {
    const {
      network,
      account,
      deployment,
      state,
      participant,
      balances,
      feed,
      isLoading,
      primaryContractAddresses
    } = this.props.ethereum;

    return (
      <div className="seedom-seed">
        <div className="background">
          <Header deployment={deployment} network={network} />
          <div className="central">
            <Stats
              side="left"
              deployment={deployment}
              state={state}
            />
            <Puck
              network={network}
              account={account}
              deployment={deployment}
              state={state}
              participant={participant}
              balances={balances}
              isLoading={isLoading}
              primaryContractAddresses={primaryContractAddresses}
              onParticipate={this.handleParticipate}
              onRaise={this.handleRaise}
              onWithdraw={this.handleWithdraw}
              onCancel={this.handleCancel}
            />
            <Stats
              side="right"
              deployment={deployment}
              state={state}
            />
          </div>
        </div>
        <About />
        <Feed feed={feed} network={network} />
      </div>
    );
  }
}

/*
<div className="accessory">
          <div className="content has-text-centered">
            <p>
              View more live <strong>Seedom</strong> data on&nbsp;
              <a className="is-green" target="_blank" href={etherscan.getAddressUrl(network, primaryContractAddresses.fundraiser)}>Etherscan</a>.
            </p>
          </div>
        </div>
<div className="accessory">
          <div className="content has-text-centered">
            <Feed feed={feed} network={network} />
          </div>
        </div>
        */

const mapStateToProps = state => {
  return { ethereum: state.ethereum };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Participate);
