import React, { Component } from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import './index.scss';

class Withdraw extends Content {
  render() {
    return (
      <div className={`seedom-content withdraw ${this.state.className}`}>
        <Indicator type={this.props.isShown ? "withdraw" : null} />
        <div className="seedom-overlay">
          <div className="puck-message">
            YOU HAVE
            <div className="balance">{this.props.balance}</div>
            ETHER TO WITHDRAW!
          </div>
        </div>
        <div className="seedom-overlay">
          <a className="button is-dark is-outlined top" onClick={this.props.onWithdrawSkipped}>SKIP UNTIL REFRESH</a>
          <a className="button is-black is-outlined" onClick={this.props.onWithdraw}>WITHDRAW</a>
        </div>
      </div>
    );
  }
}

export default Withdraw;
