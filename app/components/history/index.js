import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.scss';

class Fundraiser extends Component {
  static propTypes = {
    cause: PropTypes.shape().isRequired,
    deployment: PropTypes.shape().isRequired
  };

  render() {
    const { cause } = this.props;
    return (
      <div className="row">
        {cause.name}
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

    const { deployments, contractAddresses } = ethereum;
    if (!deployments || !contractAddresses) {
      return null;
    }

    return (
      <div className="seedom-history">
        <div className="container">
          <div className="list">
            {contractAddresses.fundraiser.map((contractAddress) => {
              const cause = causes[contractAddress];
              const deployment = deployments[contractAddress];
              if (!cause || !deployment) {
                return null;
              }

              return (
                <Fundraiser
                  cause={cause}
                  deployment={deployment}
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
