import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Header from './components/header';
import Puck from './components/puck';
import Stats from './components/stats';
import Feed from './components/feed';
import About from './components/about';
import * as messages from '../../utils/messages';
import * as etherscan from '../../utils/etherscan';
import * as ethereumActions from '../../actions/ethereum';
import './index.scss';

class Seed extends Component {
  handleParticipate = ({ message, entries }) => {
    const { raiser } = this.props.seedom;
    const messageHex = messages.hexMessage(message);
    const value = entries.times(raiser.valuePerEntry);
    this.props.dispatch(ethereumActions.send({
      contractName: 'seedom', method: 'participate', args: [messageHex], value
    }));
  }

  handleRaise = (entries) => {
    const { raiser } = this.props.seedom;
    const value = entries.times(raiser.valuePerEntry);
    this.props.dispatch(ethereumActions.send({
      contractName: 'seedom', value
    }));
  }

  handleWithdraw = (contractAddress) => {
    this.props.dispatch(ethereumActions.send({
      contractName: 'seedom', contractAddress, method: 'withdraw'
    }));
  }

  handleCancel = () => {
    this.props.dispatch(ethereumActions.send({
      contractName: 'seedom', method: 'cancel'
    }));
  }

  render() {
    const {
      network,
      account,
      primaryContractAddresses,
      raiser,
      state,
      participant,
      balances,
      feed,
      isLoading
    } = this.props.seedom;

    // render only if we have a contract address, raiser, and state
    if (!primaryContractAddresses || !raiser || !state) {
      return null;
    }

    return (
      <div className="seedom-seed">
        <div className="background">
          <Header raiser={raiser} network={network} />
          <div className="central">
            <Stats
              side="left"
              raiser={raiser}
              state={state}
            />
            <Puck
              network={network}
              account={account}
              raiser={raiser}
              state={state}
              participant={participant}
              balances={balances}
              isLoading={isLoading}
              onParticipate={this.handleParticipate}
              onRaise={this.handleRaise}
              onWithdraw={this.handleWithdraw}
              onCancel={this.handleCancel}
            />
            <Stats
              side="right"
              raiser={raiser}
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
              <a className="is-green" target="_blank" href={etherscan.getAddressUrl(network, primaryContractAddresses.seedom)}>Etherscan</a>.
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
  return { seedom: state.seedom };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Seed);
