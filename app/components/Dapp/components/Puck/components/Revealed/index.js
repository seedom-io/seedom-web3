import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import { zero, localeNumber } from '../../../../utils/numbers';
import './index.scss';

class Revealed extends Content {
  render() {
    const { className } = this.state;
    const { isShown, participant } = this.props;
    const entries = participant ? participant.entries : zero();

    return (
      <div className={`seedom-content revealed ${className}`}>
        <Indicator type={isShown ? 'checkmark' : null} />
        <div className="seedom-overlay">
          <div className="charity-logo" />
        </div>
        <div className="seedom-overlay layout">
          <div className="division text">
            <div className="entries">{localeNumber(entries)}</div>
            <div>entries confirmed</div>
          </div>
          <div className="division text">
            thanks you!
          </div>
        </div>
      </div>
    );
  }
}

export default Revealed;
