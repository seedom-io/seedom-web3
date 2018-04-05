import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as dates from '../../../../utils/dates';
import './index.scss';

class Item extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string
  };

  static defaultProps = {
    value: null
  };

  render() {
    const { type, title, value } = this.props;

    return (
      <div className={`item ${type}`}>
        <div className="item-title">
          {title}
        </div>
        <div className="item-value">
          {value}
        </div>
      </div>
    );
  }
}

class Header extends Component {
  static propTypes = {
    deployment: PropTypes.shape(),
    network: PropTypes.shape()
  };

  static defaultProps = {
    deployment: null,
    network: null
  };

  render() {
    const {
      deployment,
      network
    } = this.props;

    let deployTime;
    let endTime;
    if (deployment) {
      deployTime = dates.localeDate(deployment.deployTime);
      endTime = dates.localeDate(deployment.endTime);
    }

    let networkName;
    if (network) {
      networkName = network.name;
    }

    return (
      <div className="seedom-header">
        <div className="background" />
        <Item type="side" title="start date" value={deployTime} />
        <Item type="center" title="network" value={networkName} />
        <Item type="side" title="end date" value={endTime} />
      </div>
    );
  }
}

export default Header;
