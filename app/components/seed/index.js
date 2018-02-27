import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/header';
import Puck from './components/puck';
import Stats from './components/stats';
import Feed from './components/feed';
import HybridWeb3 from '../../utils/hybridWeb3';
import * as randoms from '../../utils/randoms';
import * as parsers from '../../utils/parsers';
import * as bytes from '../../utils/bytes';
import * as etherscan from '../../utils/etherscan';
import { BigNumber } from 'bignumber.js';
import './index.scss';

const MAX_FEED_ITEMS = 10;
const GAS = 200000;
const GAS_PRICE = 2000000000;
const FEED_BLOCKS_BACK = 10000;
const MAX_LAST_BLOCK_AGE = 60 * 1000; // 60 seconds

class Seed extends Component {


  handleParticipate = ({ random, entries }) => {
    const { account, raiser } = this.state;
    const randomHex = randoms.hexRandom(random);
    const hashedRandom = randoms.hashRandom(randomHex, account);
    const value = entries.times(raiser.valuePerEntry);

    this.handleSend(this.getContract().rpc.methods.participate(hashedRandom), {
      from: account, value
    }, 'isParticipating');
  }

  handleRaise = (entries) => {
    const { account, raiser, contractAddress } = this.state;
    const value = entries.times(raiser.valuePerEntry);

    this.handleSend(null, {
      to: contractAddress, value, from: account
    }, 'isRaising');
  }

  handleReveal = (random) => {
    const { account } = this.state;
    const randomHex = randoms.hexRandom(random);

    this.handleSend(this.getContract().rpc.methods.reveal(randomHex), {
      from: account
    }, 'isRevealing');
  }

  handleWithdraw = (contractAddress) => {
    const { account } = this.state;
    const contract = this.contracts[contractAddress];

    this.handleSend(contract.rpc.methods.withdraw(), {
      from: account
    }, 'isWithdrawing');
  }

  handleCancel = () => {
    const { account } = this.state;

    this.handleSend(this.getContract().rpc.methods.cancel(), {
      from: account
    }, 'isCancelling');
  }

  render() {
    const {
      network,
      account,
      contractAddress,
      raiser,
      state,
      participant,
      balances,
      feed,
      isLoading
    } = this.state;

    // render only if we have a contract address, raiser, and state
    if (!contractAddress || !raiser || !state) {
      return null;
    }

    return (
      <div className="seedom-dapp">
        <ToastContainer />
        <Header raiser={raiser} network={network} />
        <div className="dapp-container">
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
            onReveal={this.handleReveal}
            onWithdraw={this.handleWithdraw}
            onCancel={this.handleCancel}
          />
          <Stats
            side="right"
            raiser={raiser}
            state={state}
          />
        </div>
        <div className="container">
          <div className="content has-text-centered">
            <Feed feed={feed} network={network} />
          </div>
        </div>
        <div className="container">
          <div className="content has-text-centered">
            <p>
              View more live <strong>Seedom</strong> data on&nbsp;
              <a className="is-green" target="_blank" href={etherscan.getAddressUrl(network, contractAddress)}>Etherscan</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Seed);
