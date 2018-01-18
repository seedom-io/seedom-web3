import React, { Component } from 'react';
import './index.scss';

class HudStat extends Component {
  render() {
    return (
      <div className="stat">
        <div className="stat-title">
          {this.props.title}
        </div>
        <div className="stat-value">
          {this.props.value}
          <span className="stat-symbol">
            {this.props.symbol}
          </span>
        </div>
      </div>
    );
  }
}

class Hud extends Component {
  render() {
    return (
      <div className={`seedom-hub ${this.props.side}`}>
        {((this.props.side === 'top') || (this.props.side === 'left')) &&
          <div className="panel left">
            <HudStat title="received" value={this.props.received} symbol="Ξ" />
            <HudStat title="charity" value={this.props.charity} symbol="Ξ" />
            <HudStat title="winner" value={this.props.winner} symbol="Ξ" />
          </div>
        }
        {((this.props.side === 'top') || (this.props.side === 'right')) &&
          <div className="panel right">
            <HudStat title="participants" value={this.props.participants} />
            <HudStat title="entries" value={this.props.entries} />
            <HudStat title="revealed" value={this.props.revealed} />
          </div>
        }
      </div>
    );
  }
}

export default Hud;
