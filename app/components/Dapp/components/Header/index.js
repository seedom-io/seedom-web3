import React, { Component } from 'react';
import * as dates from '../../utils/dates';
import './index.scss';

class Item extends Component {
  render() {
    const { title, value } = this.props;

    return (
      <div className="item">
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
        <Item title="reveal date" value={dates.localeDate(raiser.revealTime)} />
        <Item title="network" value={network || 'localhost'} />
        <Item title="end date" value={dates.localeDate(raiser.endTime)} />
      </div>
    );
  }
}

export default Header;
