import React from 'react';
import SeedomContent from '../SeedomContent';
import SeedomIndicator from '../SeedomIndicator';
import charityLogo from '../../img/logos/charity.png';
import './index.scss';

class SeedomCancelled extends SeedomContent {
  render() {
    return (
      <div className={`seedom-content cancelled ${this.state.className}`}>
        <SeedomIndicator type="error" />
        <div className="seedom-overlay">
          <img src={charityLogo} />
        </div>
        <div className="seedom-overlay">
          <div className="puck-message top">RAISER</div>
          <div className="puck-message">CANCELLED</div>
        </div>
      </div>
    );
  }
}

export default SeedomCancelled;
