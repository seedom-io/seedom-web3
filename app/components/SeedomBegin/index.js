import React, { Component } from 'react';
import SeedomContent from '../SeedomContent';
import './index.scss';
import charityLogo from '../../img/logos/charity.png';

class SeedomBegin extends SeedomContent {
  render() {
    return (
      <div className={`seedom-content begin ${this.state.className}`}>
        <img src={charityLogo} />
        <a className="button is-primary is-outlined" onClick={this.props.onBegin}>OBTAIN ENTRIES</a>
      </div>
    );
  }
}

export default SeedomBegin;
