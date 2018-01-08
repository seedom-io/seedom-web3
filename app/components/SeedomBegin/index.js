import React, { Component } from 'react';
import SeedomContent from '../SeedomContent';
import './index.scss';
import eff from './eff.png';

class SeedomBegin extends SeedomContent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`seedom-overlay begin animated ${this.state.className}`}>
        <img src={eff} />
        <a className="button is-primary" onClick={this.props.onBegin}>BEGIN</a>
      </div>
    );
  }
}

export default SeedomBegin;
