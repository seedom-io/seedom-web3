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
            <SeedomHudStat title="participants" value={this.props.participants} />
            <SeedomHudStat title="entries" value={this.props.entries} />
            <SeedomHudStat title="revealed" value={this.props.revealed} />
          </div>
        }
        {((this.props.side === 'top') || (this.props.side === 'right')) &&
          <div className="panel right">
            <SeedomHudStat title="received" value={this.props.received} />
            <SeedomHudStat title="charity" value={this.props.charity} />
            <SeedomHudStat title="winner" value={this.props.winner} />
          </div>
        }
      </div>
    );
  }
}

export default SeedomHud;
