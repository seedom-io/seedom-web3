import React from 'react';
import Content from '../content';
import Indicator from '../indicator';
import { zero, localeNumber } from '../../../../../../utils/numbers';
import { Link } from 'react-router-dom';
import './index.scss';

class Participate extends Content {
  render() {
    const { className } = this.state;
    const { isShown, participant, onRaising, onTicketing } = this.props;
    const entries = participant ? participant.entries : zero();
    const localeEntries = localeNumber(entries);

    return (
      <div className={`seedom-content participated ${className}`}>
        <Indicator type={isShown ? 'success' : null} />
        <div className="seedom-overlay">
          <div className="text entries">{localeEntries}</div>
          <div className="text obtained">{Number(localeEntries) === 1 ? 'entry' : 'entries'} obtained</div>
          <div className="charity-logo small" />
          <div className="field">
            <div className="control">
              <a className="button is-dark" onClick={onRaising}>get more entries</a>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <Link className="button is-white is-outlined" to="/suggest">suggest next charity</Link>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <a className="button is-white is-outlined" onClick={onTicketing}>view ticket</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Participate;
