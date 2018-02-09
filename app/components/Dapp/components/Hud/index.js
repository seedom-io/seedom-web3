import React, { Component } from 'react';
import { localeNumber, localeDecimal, getEtherFromWei } from '../../utils/numbers';
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
            <HudStat title="received" value={localeDecimal(getEtherFromWei(received))} symbol="Ξ" />
            <HudStat title="charity" value={localeDecimal(getEtherFromWei(charity))} symbol="Ξ" />
            <HudStat title="winner" value={localeDecimal(getEtherFromWei(winner))} symbol="Ξ" />
          </div>
        }
        {((side === 'top') || (side === 'right')) &&
          <div className="panel right">
            <HudStat title="participants" value={localeNumber(participants)} />
            <HudStat title="entries" value={localeNumber(entries)} />
            <HudStat title="revealed" value={localeNumber(revealed)} />
          </div>
        }
      </div>
    );
  }
}

export default Hud;
