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
          <span className="stat-symbol">
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
    const winnerReward = received.times(raiser.winnerSplit).dividedBy(1000);
    const { totalParticipants, totalEntries, totalRevealed } = state;

    return (
      <div className={`seedom-stats ${side}`}>
        {((side === 'top') || (side === 'left')) &&
          <div className="panel left">
            <Stat title="total received" value={localeDecimal(getEtherFromWei(received))} symbol="Ξ" />
            <Stat title="charity will get" value={localeDecimal(getEtherFromWei(charityReward))} symbol="Ξ" />
            <Stat title="winner will get" value={localeDecimal(getEtherFromWei(winnerReward))} symbol="Ξ" />
          </div>
        }
        {((side === 'top') || (side === 'right')) &&
          <div className="panel right">
            <Stat title="total participants" value={localeNumber(totalParticipants)} />
            <Stat title="total entries" value={localeNumber(totalEntries)} />
            <Stat title="total revealed" value={localeNumber(totalRevealed)} />
          </div>
        }
      </div>
    );
  }
}

export default Stats;
