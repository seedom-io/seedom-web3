import React, { Component } from 'react';
import SeedomContent from '../SeedomContent';
import SeedomIndicator from '../SeedomIndicator';
import './index.scss';
import charityLogo from '../../img/logos/charity.png';

class SeedomEnd extends SeedomContent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`seedom-content end ${this.state.className}`}>
        <SeedomIndicator type={this.props.isShown ? "waiting" : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
        </div>
        <div className="seedom-overlay">
          <div className="puck-message top">WAITING FOR</div>
          <div className="puck-message">CHARITY TO REVEAL</div>
        </div>
      </div>
    );
  }
}

export default SeedomEnd;
