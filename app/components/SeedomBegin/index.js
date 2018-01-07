import React, { Component } from 'react';
import './index.scss';
import eff from './eff.png';

class SeedomBegin extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="seedom-overlay">
        <img src={eff} />
        <a className="button is-primary" onClick={this.props.onBegin}>BEGIN</a>
      </div>
    );
  }
}

export default SeedomBegin;
