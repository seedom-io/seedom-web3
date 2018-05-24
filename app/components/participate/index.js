import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as messages from '@seedom-io/seedom-crypter/messages';
import * as ethereumActions from '../../actions/ethereum';
import Header from './components/header';
import Puck from './components/puck';
import Stats from './components/stats';
import Feed from './components/feed';
import About from './components/about';
import Background from './components/background';
import './index.scss';

class Participate extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    ethereum: PropTypes.shape(),
    causes: PropTypes.shape(),
    ticker: PropTypes.shape()
  };

  static defaultProps = {
    ethereum: null,
    causes: null,
    ticker: null
  };

  constructor(props) {
    super(props);
    this.state = {
      hasPlayed: false
    };
  }

  handlePlay = (override) => {
    let play = override;
    if (!this.state.hasPlayed) {
      this.setState({ hasPlayed: true });
      play = true;
    }
    if (play) {
      this.about.play();
    }
  }

  handleParticipate = ({ message, entries, email }) => {
    const { deployments, primaryContractAddresses, account } = this.props.ethereum;
    const deployment = deployments[primaryContractAddresses.fundraiser];
    const { causes } = this.props;
    const cause = causes[primaryContractAddresses.fundraiser];
    const messageHex = messages.hex(message);
    const value = entries.times(deployment.valuePerEntry);

    // dispatch to ethereum
    this.props.dispatch(ethereumActions.send({
      contractName: 'fundraiser', method: 'participate', args: [messageHex], value
    }));

    // send to mailerlite
    if (email !== '') {
      axios.post('/mailerlite/addParticipant', {
        email,
        participant: account,
        cause: cause.name,
        message
      });
    }

    // play the video!
    this.handlePlay();
  };

  handleRaise = (entries) => {
    const { deployments, primaryContractAddresses } = this.props.ethereum;
    const deployment = deployments[primaryContractAddresses.fundraiser];
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
    const { ethereum } = this.props;
    if (!ethereum) {
      return null;
    }

    const {
      network,
      account,
      deployments,
      states,
      participant,
      balances,
      feed,
      isLoading,
      primaryContractAddresses,
      causesVoteCount
    } = ethereum;
    if (!primaryContractAddresses) {
      return null;
    }

    const { causes, ticker } = this.props;
    // get primary deployment, state, and cause
    const deployment = deployments && deployments[primaryContractAddresses.fundraiser];
    const state = states && states[primaryContractAddresses.fundraiser];
    const cause = causes && causes[primaryContractAddresses.fundraiser];

    return (
      <div className="seedom-seed">
        <Header deployment={deployment} network={network} />
        <div className="central">
          <Background cause={cause} />
          <Stats
            side="left"
            deployment={deployment}
            state={state}
            cause={cause}
            ticker={ticker}
          />
          <Puck
            network={network}
            account={account}
            deployment={deployment}
            cause={cause}
            state={state}
            participant={participant}
            balances={balances}
            isLoading={isLoading}
            primaryContractAddresses={primaryContractAddresses}
            onParticipate={this.handleParticipate}
            onRaise={this.handleRaise}
            onWithdraw={this.handleWithdraw}
            onCancel={this.handleCancel}
            onPlay={this.handlePlay}
          />
          <Stats
            side="right"
            deployment={deployment}
            state={state}
            cause={cause}
            ticker={ticker}
            causesVoteCount={causesVoteCount}
          />
        </div>
        <About
          cause={cause}
          ref={(component) => { this.about = component; }}
        />
        <Feed feed={feed} network={network} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ethereum: state.ethereum,
    causes: state.causes,
    ticker: state.ticker
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Participate);
