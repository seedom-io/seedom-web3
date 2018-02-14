import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import { zero, localeNumber } from '../../../../utils/numbers';
import charityLogo from '../../../../../../img/logos/charity.png';
import './index.scss';

class Participate extends Content {
  render() {
    const { className } = this.state;
    const { isShown, participant, onGetMoreEntries } = this.props;
    const entries = participant ? participant.entries : zero();

    return (
      <div className={`seedom-content participated ${className}`}>
        <Indicator type={isShown ? 'checkmark' : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
        </div>
        <div className="seedom-overlay layout">
          <div className="division text">
            <div className="entries">{localeNumber(entries)}</div>
            <div>entries obtained</div>
          </div>
          <div className="division">
            <a className="button is-dark" onClick={onGetMoreEntries}>GET MORE ENTRIES</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Participate;
