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

    return (
      <div className="seedom-header">
        <div className="background" />
        <Item type="side" title="start date" value={dates.localeDate(raiser.deployTime)} />
        <Item type="center" title="network" value={network} />
        <Item type="side" title="end date" value={dates.localeDate(raiser.endTime)} />
      </div>
    );
  }
}

export default Header;
