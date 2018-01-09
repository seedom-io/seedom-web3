import React, { Component } from 'react';
import SeedomContent from '../SeedomContent';
import './index.scss';
import eff from './eff.png';

class SeedomWin extends SeedomContent {

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
      <div className={`seedom-content win ${this.state.className}`}>
        <div className="seedom-overlay">
          <svg className={`checkmark ${this.state.checkedClassName}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="circle" cx="26" cy="26" r="25"/>
          </svg>
        </div>
        <div className="seedom-overlay">
          <img src={eff} />
        </div>
        <div className="seedom-overlay">
          <div className="congrats">CONGRATULATES</div>
        </div>
        <div className="seedom-overlay">
          <div className="alias">ET</div>
        </div>
        <div className="seedom-overlay">
          <div className="random">I LOVE YOU MOM!!!</div>
        </div>
        <div className="seedom-overlay">
          <div className="address">0x7d571b2942b8144EBfD22c5F608A391F0B9E43d3</div>
        </div>
      </div>
    );
  }
}

export default SeedomWin;
