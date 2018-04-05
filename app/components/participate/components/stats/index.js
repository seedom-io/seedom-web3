import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { localeNumber, localeDecimal, getEtherFromWei } from '../../../../utils/numbers';
import './index.scss';

class Stat extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
    ether: PropTypes.bool
  };

  static defaultProps = {
    value: null,
    ether: false
  };

  render() {
    const { title, value, ether } = this.props;
    return (
      <div className="stat">
        <div className="stat-title">
          {title}
        </div>
        <div className="stat-value">
          {value}
          {ether && (
            <span className="ether">
              <i className="fas fa-bars" />
            </span>
          )}
        </div>
      </div>
    );
  }
}

class Stats extends Component {
  static propTypes = {
    side: PropTypes.string.isRequired,
    raiser: PropTypes.shape(),
    state: PropTypes.shape()
  };

  static defaultProps = {
    raiser: null,
    state: null
  };

  render() {
    const {
      side,
      raiser,
      state
    } = this.props;

    let causeReward;
    let participantReward;
    let totalParticipants;
    let totalEntries;
    if (raiser && state) {
      const received = state.totalEntries.times(raiser.valuePerEntry);
      causeReward
        = localeDecimal(getEtherFromWei(received.times(raiser.causeSplit).dividedBy(1000)));
      participantReward
        = localeDecimal(getEtherFromWei(received.times(raiser.participantSplit).dividedBy(1000)));
      totalParticipants = localeNumber(state.totalParticipants);
      totalEntries = localeNumber(state.totalEntries);
    }

    return (
      <div className={`seedom-stats ${side}`}>
        {((side === 'top') || (side === 'left')) &&
          <div className="panel">
            <div className="background" />
            <Stat title="cause will get" value={causeReward} ether />
            <Stat title="one participant will get" value={participantReward} ether />
          </div>
        }
        {((side === 'top') || (side === 'right')) &&
          <div className="panel">
            <div className="background" />
            <Stat title="total participants" value={totalParticipants} />
            <Stat title="total entries" value={totalEntries} />
          </div>
        }
      </div>
    );
  }
}

export default Stats;
