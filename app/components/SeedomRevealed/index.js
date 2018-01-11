import React, { Component } from 'react';
import SeedomContent from '../SeedomContent';
import SeedomIndicator from '../SeedomIndicator';
import charityLogo from '../../img/logos/charity.png';
import './index.scss';

class SeedomRevealed extends SeedomContent {
  render() {
    return (
      <div className={`seedom-content revealed ${this.state.className}`}>
        <SeedomIndicator type={this.props.isShown ? "checkmark" : null} />
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

export default SeedomRevealed;
