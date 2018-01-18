import React, { Component } from 'react';
import { localeNumber, getEtherFromWei } from '../../utils/numbers';
import './index.scss';

class HudStat extends Component {
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

class Hud extends Component {
  render() {
    const {
      side,
      received,
      charity,
      winner,
      participants,
      entries,
      revealed
    } = this.props;

    return (
      <div className={`seedom-hub ${side}`}>
        {((side === 'top') || (side === 'left')) &&
          <div className="panel left">
            <HudStat title="received" value={localeNumber(getEtherFromWei(received))} symbol="Ξ" />
            <HudStat title="charity" value={localeNumber(getEtherFromWei(charity).toLocaleString())} symbol="Ξ" />
            <HudStat title="winner" value={localeNumber(getEtherFromWei(winner).toLocaleString())} symbol="Ξ" />
          </div>
        }
        {((side === 'top') || (side === 'right')) &&
          <div className="panel right">
            <HudStat title="participants" value={localeNumber(participants.toLocaleString())} />
            <HudStat title="entries" value={localeNumber(entries.toLocaleString())} />
            <HudStat title="revealed" value={localeNumber(revealed.toLocaleString())} />
          </div>
        }
      </div>
    );
  }
}

export default Hud;
