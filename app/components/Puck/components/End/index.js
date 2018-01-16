import React, { Component } from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import './index.scss';
import charityLogo from '../../../../img/logos/charity.png';

class End extends Content {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`seedom-content end ${this.state.className}`}>
        <Indicator type={this.props.isShown ? "waiting" : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
        </div>
        <div className="seedom-overlay">
          <div className="puck-message top">PLEASE WAIT<br />FOR</div>
          <div className="puck-message">TO REVEAL<br />THEIR RANDOM</div>
        </div>
      </div>
    );
  }
}

export default End;
