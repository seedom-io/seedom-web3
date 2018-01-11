import React, { Component } from 'react';
import SeedomContent from '../SeedomContent';
import SeedomIndicator from '../SeedomIndicator';
import './index.scss';
import charityLogo from '../../img/logos/charity.png';

class SeedomError extends SeedomContent {
  render() {
    return (
      <div className={`seedom-content error ${this.state.className}`}>
        <SeedomIndicator type={this.props.isShown ? "error" : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
        </div>
        {{
          "participation": (
            <div className="seedom-overlay">
              <div className="puck-message top">PARTICIPATION NOT<br />DETECTED</div>
              <div className="puck-message">DURING<br />PARTICIPATION PHASE</div>
            </div>
          ),
          "metamask": (
            <div className="seedom-overlay">
              <div className="puck-message top">METAMASK PLUGIN</div>
              <div className="puck-message">NOT DETECTED</div>
            </div>
          )
        }[this.props.error]}
      </div>
    );
  }
}

export default SeedomError;
