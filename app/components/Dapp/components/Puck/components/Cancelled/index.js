import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import charityLogo from '../../../../../../img/logos/charity.png';
import './index.scss';

class Cancelled extends Content {
  render() {
    const { className } = this.state;

    return (
      <div className={`seedom-content cancelled ${className}`}>
        <Indicator type="error" />
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

export default Cancelled;
