import React, { Component } from 'react';
import CircularProgress from '../CircularProgress';
import SeedomContent from '../SeedomContent';
import SeedomBegin from '../SeedomBegin';
import SeedomParticipate from '../SeedomParticipate';
import './index.scss';

const PHASES = {
  BEGIN: 'BEGIN',
  PARTICIPATION: 'PARTICIPATION',
  REVEAL: 'REVEAL',
  END: 'END'
};

class SeedomPuck extends Component {

  constructor(props) {
    super(props);

    const kickoffTime = new Date();
    const revealTime = new Date();
    const endTime = new Date();
    const expireTime = new Date();

    kickoffTime.setMinutes(kickoffTime.getMinutes() - 1);
    revealTime.setMinutes(endTime.getMinutes() + 2);
    endTime.setMinutes(revealTime.getMinutes() + 2);
    expireTime.setMinutes(endTime.getMinutes() + 2);

    this.state = {
      begun: false,
      phase: null,
      raiser: {
        kickoffTime: kickoffTime,
        revealTime: revealTime,
        endTime: endTime,
        expireTime: expireTime,
        valuePerEntry: 0
      }
    };
  }

  getPhase() {
    const now = Date.now();
    const raiser = this.state.raiser;

    if (now > raiser.kickoffTime && now < raiser.revealTime) {
      if (!this.state.begun) {
        return 'BEGIN';
      } else {
        return 'PARTICIPATION';
      }
    } else if (now > raiser.revealTime && now < raiser.endTime) {
      return 'REVELATION';
    }

    return 'END';
  };

  handleBegin = () => {
    this.setState({ begun: true });
  }

  render() {
    const phase = this.getPhase();

    return (
      <div className="seedom-puck">
        <CircularProgress percentage={50} />
        <SeedomContent show={phase === 'BEGIN'}>
          <SeedomBegin onBegin={this.handleBegin} />
        </SeedomContent>
        <SeedomContent show={phase === 'PARTICIPATION'}>
          <SeedomParticipate />
        </SeedomContent>
      </div>
    );
  }

}

export default SeedomPuck;
