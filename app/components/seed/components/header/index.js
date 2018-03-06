import React, { Component } from 'react';
import * as dates from '../../../../utils/dates';
import './index.scss';

class Item extends Component {
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
