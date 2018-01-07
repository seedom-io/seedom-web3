import React, { Component } from 'react';
import CircularProgress from '../CircularProgress';
import SeedomBegin from '../SeedomBegin';
import './index.scss';

class SeedomPuck extends Component {
  render() {
    return (
      <div class="puck">
        <CircularProgress percentage="50" />
        <SeedomBegin />
      </div>
    );
  }
}

export default SeedomPuck;
