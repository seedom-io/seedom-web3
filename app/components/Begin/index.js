import React, { Component } from 'react';
import './index.scss';
import eff from './eff.png';

class Begin extends Component {
  render() {
    return (
      <div class="content">
        <div class="overlay">
          <img src={eff} />
        </div>
        <div class="overlay">
          <a class="button is-primary">PARTICIPATE</a>
        </div>
      </div>
    );
  }
}

export default Begin;
