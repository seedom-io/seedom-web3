import React, { Component } from 'react';
import { localeNumber, localeDecimal, getEtherFromWei } from '../../../../utils/numbers';
import './index.scss';

class Stat extends Component {
  render() {
    const { title, value, symbol } = this.props;
    return (
      <div className="stat">
        <div className="stat-title">
          {title}
        </div>
        <div className="stat-value">
          {value}
          <span className="ether">
            {symbol}
          </span>
        </div>
      </div>
    );
  }
}

class Stats extends Component {
  render() {
    const {
      side,
      raiser,
      state
    } = this.props;

    let charityReward;
    let selectedReward;
    let totalParticipants;
    let totalEntries;
    if (raiser && state) {
      const received = state.totalEntries.times(raiser.valuePerEntry);
      charityReward
        = localeDecimal(getEtherFromWei(received.times(raiser.charitySplit).dividedBy(1000)));
      selectedReward
        = localeDecimal(getEtherFromWei(received.times(raiser.selectedSplit).dividedBy(1000)));
      totalParticipants = localeNumber(state.totalParticipants);
      totalEntries = localeNumber(state.totalEntries);
    }

    return (
      <div className={`seedom-stats ${side}`}>
        {((side === 'top') || (side === 'left')) &&
          <div className="panel">
            <div className="background" />
            <Stat title="charity will get" value={charityReward} symbol="&Xi;" />
            <Stat title="selected will get" value={selectedReward} symbol="&Xi;" />
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
