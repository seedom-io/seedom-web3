import React, { Component } from 'react';
import eff from './eff.png';
import './index.scss';

class SeedomParticipate extends Component {

  constructor(props) {
    super(props);
  }

  focus() {
    this.entries.focus();
  }

  render() {
    return (
        <div className="seedom-overlay participate">
          <img src={eff} />
          <input className="input is-primary" type="text" placeholder="NUMBER OF ENTRIES" ref={(input) => { this.entries = input; }} />
          <textarea className="textarea is-primary" type="text" placeholder="RANDOM CONTRIBUTION"></textarea>
          <a className="button is-primary" onClick={this.props.onBegin}>PARTICIPATE</a>
        </div>
    );
  }
}

export default SeedomParticipate;
