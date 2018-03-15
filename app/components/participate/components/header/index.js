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
    raiser: PropTypes.shape(),
    network: PropTypes.shape()
  };

  static defaultProps = {
    raiser: null,
    network: null
  };

  render() {
    const {
      raiser,
      network
    } = this.props;

    let deployTime;
    let endTime;
    if (raiser) {
      deployTime = dates.localeDate(raiser.deployTime);
      endTime = dates.localeDate(raiser.endTime);
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
