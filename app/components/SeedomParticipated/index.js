import React, { Component } from 'react';
import SeedomContent from '../SeedomContent';
import SeedomIndicator from '../SeedomIndicator';
import charityLogo from '../../img/logos/charity.png';
import './index.scss';

class SeedomParticipate extends SeedomContent {
  render() {
    return (
      <div className={`seedom-content participated ${this.state.className}`}>
        <SeedomIndicator type={this.props.isShown ? "checkmark" : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
        </div>
        <div className="seedom-overlay">
          <div className="entries">
            <div className="total">{this.props.entries}</div>
            ENTRIES OBTAINED
          </div>
        </div>
        <div className="seedom-overlay">
          <a className="button is-primary is-outlined" onClick={this.props.onGetMoreEntries}>GET MORE ENTRIES</a>
        </div>
      </div>
    );
  }
}

export default SeedomParticipate;
