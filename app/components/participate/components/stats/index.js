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
    deployment: PropTypes.shape(),
    state: PropTypes.shape(),
    cause: PropTypes.shape()
  };

  static defaultProps = {
    deployment: null,
    state: null,
    cause: null
  };

  render() {
    const {
      side,
      deployment,
      state,
      cause
    } = this.props;

    let causeReward;
    let participantReward;
    let participants;
    let entries;
    if (deployment && state) {
      const received = state.entries.times(deployment.valuePerEntry);
      causeReward
        = localeDecimal(getEtherFromWei(received.times(deployment.causeSplit).dividedBy(1000)));
      participantReward
        = localeDecimal(getEtherFromWei(received.times(deployment.participantSplit).dividedBy(1000)));
      participants = localeNumber(state.participants);
      entries = localeNumber(state.entries);
    }

    let causeName = 'cause';
    if (cause) {
      causeName = cause.name;
    }

    return (
      <div className={`seedom-stats ${side}`}>
        {((side === 'top') || (side === 'left')) &&
          <div className="panel">
            <div className="background" />
            <Stat title="winner will get" value={participantReward} ether />
            <Stat title={`${causeName} will get`} value={causeReward} ether />
          </div>
        }
        {((side === 'top') || (side === 'right')) &&
          <div className="panel">
            <div className="background" />
            <Stat title="participants" value={participants} />
            <Stat title="entries" value={entries} />
          </div>
        }
      </div>
    );
  }
}

export default Stats;
