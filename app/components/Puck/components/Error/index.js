import React, { Component } from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import './index.scss';
import metamaskLogo from '../../../../img/logos/metamask.png';
import charityLogo from '../../../../img/logos/charity.png';

class Error extends Content {
  render() {
    return (
      <div className={`seedom-content error ${this.state.className}`}>
        <Indicator type={this.props.isShown ? 'error' : null} />
        <div className="seedom-overlay">
          {{
            'error-charityHashedRandom': (
              <img src={charityLogo} />
            ),
            'error-hashedRandom': (
              <img src={charityLogo} />
            ),
            "error-metamask": (
              <img src={metamaskLogo} />
            )
          }[this.props.error]}
        </div>
        <div className="seedom-overlay">
          {{
            'error-charityHashedRandom': (
              <div className="seedom-overlay">
                <div className="puck-message top">CHARITY FAILED<br />TO</div>
                <div className="puck-message">SEED A<br />RANDOM</div>
              </div>
            ),
            'error-hashedRandom': (
              <div className="seedom-overlay">
                <div className="puck-message top">PARTICIPATION NOT<br />DETECTED</div>
                <div className="puck-message">DURING<br />PARTICIPATION PHASE</div>
              </div>
            ),
            'error-metamask': (
              <div className="seedom-overlay">
                <div className="puck-message top">METAMASK PLUGIN</div>
                <div className="puck-message">NOT DETECTED</div>
              </div>
            )
          }[this.props.error]}
        </div>
      </div>
    );
  }
}

export default Error;
