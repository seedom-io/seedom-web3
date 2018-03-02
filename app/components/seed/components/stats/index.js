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

    // once we have the raiser and state, calculate HUD data
    const received = state.totalEntries.times(raiser.valuePerEntry);
    const charityReward = received.times(raiser.charitySplit).dividedBy(1000);
    const selectedReward = received.times(raiser.selectedSplit).dividedBy(1000);
    const { totalParticipants, totalEntries } = state;

    return (
      <div className={`seedom-stats ${side}`}>
        {((side === 'top') || (side === 'left')) &&
          <div className="panel left">
            <Stat title="charity will get" value={localeDecimal(getEtherFromWei(charityReward))} symbol="Ξ" />
            <Stat title="selected will get" value={localeDecimal(getEtherFromWei(selectedReward))} symbol="Ξ" />
          </div>
        }
        {((side === 'top') || (side === 'right')) &&
          <div className="panel right">
            <Stat title="total participants" value={localeNumber(totalParticipants)} />
            <Stat title="total entries" value={localeNumber(totalEntries)} />
          </div>
        }
      </div>
    );
  }
}

export default Stats;
