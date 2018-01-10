import React, { Component } from 'react';
import SeedomContent from '../SeedomContent';
import SeedomIndicator from '../SeedomIndicator';
import './index.scss';
import charityLogo from '../../img/logos/charity.png';

class SeedomSeed extends SeedomContent {
  render() {
    return (
      <div className={`seedom-content seed ${this.state.className}`}>
        <SeedomIndicator type={this.props.isShown ? "waiting" : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
        </div>
        <div className="seedom-overlay">
          <div className="puck-message top">PLEASE WAIT<br />FOR</div>
          <div className="puck-message">TO SEED<br />THEIR RANDOM</div>
        </div>
      </div>
    );
  }
}

export default SeedomSeed;
