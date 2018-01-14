import React, { Component } from 'react';
import './index.scss';

class SeedomHudStat extends Component {
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

class SeedomHud extends Component {
  render() {
    return (
      <div className={`seedom-hub ${this.props.side}`}>
        {((this.props.side === 'top') || (this.props.side === 'left')) &&
          <div className="panel left">
            <SeedomHudStat title="received" value={this.props.received} symbol="Ξ" />
            <SeedomHudStat title="charity" value={this.props.charity} symbol="Ξ" />
            <SeedomHudStat title="winner" value={this.props.winner} symbol="Ξ" />
          </div>
        }
        {((this.props.side === 'top') || (this.props.side === 'right')) &&
          <div className="panel right">
            <SeedomHudStat title="participants" value={this.props.participants} />
            <SeedomHudStat title="entries" value={this.props.entries} />
            <SeedomHudStat title="revealed" value={this.props.revealed} />
          </div>
        }
      </div>
    );
  }
}

export default SeedomHud;
