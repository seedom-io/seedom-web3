import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '../CircularProgress';
import SeedomBegin from '../SeedomBegin';
import SeedomParticipate from '../SeedomParticipate';
import SeedomParticipated from '../SeedomParticipated';
import './index.scss';
import { loadavg } from 'os';

const PHASES = {
  BEGIN: 'BEGIN',
  PARTICIPATION: 'PARTICIPATION',
  REVEAL: 'REVEAL',
  END: 'END'
};

class SeedomPuck extends Component {
  static propTypes = {
    onParticipate: PropTypes.func.isRequired
  }

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
      isLoading: false,
      begun: false,
      participated: false,
      phase: null,
      raiser: {
        kickoffTime,
        revealTime,
        endTime,
        expireTime,
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
      } else if (!this.state.participated) {
        return 'PARTICIPATION';
      } else {
        return 'PARTICIPATED';
      }
    } else if (now > raiser.revealTime && now < raiser.endTime) {
      return 'REVELATION';
    }

    return 'END';
  }

  changeLoading = (loading) => {
    this.setState({ isLoading: loading });
  }

  handleBegin = () => {
    this.setState({ begun: true });
  }

  handleParticipate = ({ seed, numOfEntries }) => {
    this.setState({ participated: true });
    this.props.onParticipate({ seed, numOfEntries });
  }

  render() {
    const phase = this.getPhase();

    return (
      <div className="seedom-puck">
        <CircularProgress percentage={50} isLoading={this.state.isLoading} />
        <SeedomBegin isShown={phase === 'BEGIN'} changeLoading={this.changeLoading} onBegin={this.handleBegin} />
        <SeedomParticipate isShown={phase === 'PARTICIPATION'} changeLoading={this.changeLoading} onParticipate={this.handleParticipate} />
        <SeedomParticipated isShown={phase === 'PARTICIPATED'} changeLoading={this.changeLoading} />
      </div>
    );
  }
}

export default SeedomPuck;
