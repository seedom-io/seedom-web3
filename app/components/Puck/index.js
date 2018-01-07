import React, { Component } from 'react';
import Progress from '../Progress';
import Begin from '../Begin';
import './index.scss';

class Puck extends Component {
  render() {
    return (
      <div class="puck">
        <Progress percentage="50" />
        <Begin />
      </div>
    );
  }
}

export default Puck;
