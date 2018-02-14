import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import { zero, localeNumber } from '../../../../utils/numbers';
import './index.scss';

class Participate extends Content {
  render() {
    const { className } = this.state;
    const { isShown, participant, onStartedRaising } = this.props;
    const entries = participant ? participant.entries : zero();
    const localeEntries = localeNumber(entries);

    return (
      <div className={`seedom-content participated ${className}`}>
        <Indicator type={isShown ? 'checkmark' : null} />
        <div className="seedom-overlay">
          <div className="charity-logo" />
        </div>
        <div className="seedom-overlay layout">
          <div className="division text">
            <div className="entries">{localeEntries}</div>
            <div>{Number(localeEntries) === 1 ? 'entry' : 'entries'} obtained</div>
          </div>
          <div className="division">
            <a className="button is-dark" onClick={onStartedRaising}>get more entries</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Participate;
