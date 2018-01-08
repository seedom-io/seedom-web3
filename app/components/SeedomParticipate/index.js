import React, { Component } from 'react';
import SeedomContent from '../SeedomContent';
import eff from './eff.png';
import './index.scss';

class SeedomParticipate extends SeedomContent {

  constructor(props) {
    super(props);
  }

  show() {
    super.show();
    this.entriesInput.focus();
  }

  render() {
    return (
      <div className={`seedom-overlay participate animated ${this.state.className}`}>
        <img src={eff} />
        <input className="input is-primary" type="text" placeholder="NUMBER OF ENTRIES" ref={(input) => { this.entriesInput = input; }} />
        <textarea className="textarea is-primary" type="text" placeholder="RANDOM CONTRIBUTION"></textarea>
        <a className="button is-primary" onClick={this.props.onParticipate}>PARTICIPATE</a>
      </div>
    );
  }
}

export default SeedomParticipate;
