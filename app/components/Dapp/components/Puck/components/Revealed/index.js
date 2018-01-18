import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import charityLogo from '../../../../../../img/logos/charity.png';
import './index.scss';

class Revealed extends Content {
  render() {
    const { className } = this.state;
    const { isShown, entries } = this.props;

    return (
      <div className={`seedom-content revealed ${className}`}>
        <Indicator type={isShown ? 'checkmark' : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
        </div>
        <div className="seedom-overlay">
          <div className="puck-message entries">
            <div className="total">{entries}</div>
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
