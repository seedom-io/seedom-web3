import React from 'react';
import PropTypes from 'prop-types';
import { zero, localeNumber } from '../../../../../../utils/numbers';
import { Link } from 'react-router-dom';
import Content from '../content';
import Indicator from '../indicator';
import CauseLogo from '../../../../../causeLogo';
import './index.scss';

class Participation extends Content {
  static propTypes = {
    isShown: PropTypes.bool.isRequired,
    participant: PropTypes.shape(),
    onRaising: PropTypes.func.isRequired,
    onBadging: PropTypes.func.isRequired,
    deployment: PropTypes.shape()
  };

  static defaultProps = {
    participant: null,
    deployment: null
  };

  render() {
    const { className } = this.state;
    const { isShown, participant, onRaising, onBadging, deployment } = this.props;
    const entries = participant ? participant.entries : zero();
    const localeEntries = localeNumber(entries);

    return (
      <div className={`seedom-content participated ${className}`}>
        <Indicator type={isShown ? 'success' : null} />
        <div className="seedom-overlay">
          <div className="text entries">{localeEntries}</div>
          <div className="text obtained">{Number(localeEntries) === 1 ? 'entry' : 'entries'} obtained</div>
          <CauseLogo deployment={deployment} size="small" />
          <div className="field">
            <div className="control">
              <a className="button is-dark" onClick={onRaising}>get more entries</a>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <Link className="button is-white is-outlined" to="/vote">vote on next cause</Link>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <a className="button is-white is-outlined" onClick={onBadging}>view badge</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Participation;
