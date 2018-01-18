import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import { localeNumber } from '../../../../utils/numbers';
import charityLogo from '../../../../../../img/logos/charity.png';
import './index.scss';

class Participate extends Content {
  render() {
    const { className } = this.state;
    const { isShown, entries, onGetMoreEntries } = this.props;

    return (
      <div className={`seedom-content participated ${className}`}>
        <Indicator type={isShown ? 'checkmark' : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
        </div>
        <div className="seedom-overlay">
          <div className="entries">
            <div className="total">{localeNumber(entries)}</div>
            ENTRIES OBTAINED
          </div>
        </div>
        <div className="seedom-overlay">
          <a className="button is-black is-outlined" onClick={onGetMoreEntries}>GET MORE ENTRIES</a>
        </div>
      </div>
    );
  }
}

export default Participate;
