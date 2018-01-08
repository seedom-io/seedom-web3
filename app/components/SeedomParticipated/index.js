import React, { Component } from 'react';
import SeedomContent from '../SeedomContent';
import eff from './eff.png';
import check from './check.png';
import './index.scss';

class SeedomParticipate extends SeedomContent {

  constructor(props) {
    super(props);
  }

  show() {
    super.show();
    this.setState({
      checkedClassName: "checked"
    });
  }

  render() {
    return (
      <div className={`seedom-content participated ${this.state.className}`}>
        <div className="seedom-overlay">
          <svg className={`checkmark ${this.state.checkedClassName}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="circle" cx="26" cy="26" r="25"/>
            <path className="check" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>
        <div className="seedom-overlay">
          <img src={eff} />
        </div>
        <div className="seedom-overlay">
          <div className="thank-you">THANK YOU!</div>
          <div className="reveal-soon">REVEAL SOON</div>
        </div>
      </div>
    );
  }
}

export default SeedomParticipate;
