import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as etherscan from '../../../../../../utils/etherscan';
import './index.scss';

class Footer extends Component {
  static propTypes = {
    network: PropTypes.shape(),
    primaryContractAddresses: PropTypes.shape()
  };

  static defaultProps = {
    network: null,
    primaryContractAddresses: null
  };

  render() {
    const { network, primaryContractAddresses } = this.props;
    if (!network || !primaryContractAddresses) {
      return null;
    }

    return (
      <div className="seedom-participate-puck-footer">
        View live contract data on <a className="is-green" target="_blank" href={etherscan.getAddressUrl(network.name, primaryContractAddresses.fundraiser)}>Etherscan</a>
      </div>
    );
  }
}

export default Footer;
