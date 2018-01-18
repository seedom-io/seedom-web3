import React, { Component } from 'react';
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

const getEtherFromWei = (wei) => {
  const ether = wei / 1000000000000000000;
  return ether.toFixed(2);
};

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
            <HudStat title="received" value={getEtherFromWei(received)} symbol="Ξ" />
            <HudStat title="charity" value={getEtherFromWei(charity)} symbol="Ξ" />
            <HudStat title="winner" value={getEtherFromWei(winner)} symbol="Ξ" />
          </div>
        }
        {((side === 'top') || (side === 'right')) &&
          <div className="panel right">
            <HudStat title="participants" value={participants} />
            <HudStat title="entries" value={entries} />
            <HudStat title="revealed" value={revealed} />
          </div>
        }
      </div>
    );
  }
}

export default Hud;
