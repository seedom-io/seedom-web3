import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { localeNumber, localeDecimal, getEtherFromWei } from '../../utils/numbers';
import * as etherscan from '../../utils/etherscan';
import CauseLogo from '../causeLogo';
import './index.scss';

class Fundraiser extends Component {
  static propTypes = {
    cause: PropTypes.shape().isRequired,
    deployment: PropTypes.shape().isRequired,
    state: PropTypes.shape().isRequired,
    contractAddress: PropTypes.string.isRequired,
    network: PropTypes.shape().isRequired
  };

  openCause = () => {
    const { cause } = this.props;
    const causeUrl = `https://${cause.url}`;
    window && window.open(causeUrl, '_blank');
  }

  openContract = () => {
    const { network, contractAddress } = this.props;
    const etherscanUrl = etherscan.getAddressUrl(network.name, contractAddress);
    if (etherscanUrl) {
      window && window.open(etherscanUrl, '_blank');
    }
  }

  render() {
    const { cause, deployment, state } = this.props;
    const totalRaised = getEtherFromWei(state.entries.times(deployment.valuePerEntry));
    const causeReward = totalRaised.times(deployment.causeSplit).dividedBy(1000);
    const causeRewardEther = localeDecimal(causeReward, 3);

    return (
      <div className="row">

        <div className="bit begin cause" onClick={() => { this.openCause(); }}>
          <CauseLogo cause={cause} size="badge" />
        </div>

        <div className="bit header-normal stretch">
          {cause.name}
        </div>

        <div className="bit contract" onClick={() => { this.openContract(); }}>
          <i class="fas fa-file-alt" />
        </div>

        <div className="bit">
          <div className="bit">
            <i class="fas fa-user" />
          </div>
          <div className="bit">
            {state.participants.toString()}
          </div>
        </div>

        <div className="bit">
          <div className="bit">
            <i className="far fa-arrow-alt-circle-up" />
          </div>
          <div className="bit">
            {causeRewardEther}
            <span className="currency">
              <i className="fas fa-bars" />
            </span>
          </div>
        </div>

      </div>
    );
  }
}

class History extends Component {
  static propTypes = {
    ethereum: PropTypes.shape(),
    causes: PropTypes.shape()
  };

  static defaultProps = {
    ethereum: null,
    causes: null
  };

  render() {
    const { ethereum, causes } = this.props;
    if (!ethereum || !causes) {
      return null;
    }

    const { network, deployments, states, contractAddresses } = ethereum;
    if (!network || !deployments || !states || !contractAddresses) {
      return null;
    }

    return (
      <div className="seedom-history">
        <div className="container">
          <div className="list">
            {contractAddresses.fundraiser.map((contractAddress) => {
              const cause = causes[contractAddress];
              const deployment = deployments[contractAddress];
              const state = states[contractAddress];
              if (!cause || !deployment || !state) {
                return null;
              }

              return (
                <Fundraiser
                  cause={cause}
                  deployment={deployment}
                  state={state}
                  contractAddress={contractAddress}
                  network={network}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ethereum: state.ethereum,
    causes: state.causes
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
