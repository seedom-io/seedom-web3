import React, { Component } from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import charityLogo from '../../../../img/logos/charity.png';
import './index.scss';

class Revealed extends Content {
  render() {
    return (
      <div className={`seedom-content revealed ${this.state.className}`}>
        <Indicator type={this.props.isShown ? "checkmark" : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
        </div>
        <div className="seedom-overlay">
          <div className="puck-message entries">
            <div className="total">{this.props.participant ? this.props.participant.entries : 0}</div>
            ENTRIES CONFIRMED
          </div>
        </div>
        <div className="seedom-overlay">
          <div className="puck-message thank-you">
            THANKS YOU!
          </div>
        </div>
      </div>
    );
  }
}

export default Revealed;
