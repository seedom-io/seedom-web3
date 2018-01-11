import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SeedomCircles from '../SeedomCircles';
import SeedomSeed from '../SeedomSeed';
import SeedomBegin from '../SeedomBegin';
import SeedomParticipate from '../SeedomParticipate';
import SeedomParticipated from '../SeedomParticipated';
import SeedomRaise from '../SeedomRaise';
import SeedomReveal from '../SeedomReveal';
import SeedomEnd from '../SeedomEnd';
import SeedomWin from '../SeedomWin';
import SeedomError from '../SeedomError';
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
    onParticipate: PropTypes.func.isRequired,
    raiser: PropTypes.shape({
      endTime: PropTypes.instanceOf(Date).isRequired,
      expireTime: PropTypes.instanceOf(Date).isRequired,
      kickoffTime: PropTypes.instanceOf(Date).isRequired,
      revealTime: PropTypes.instanceOf(Date).isRequired,
      valuePerEntry: PropTypes.number.isRequired
    }).isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      hasBegun: false,
      isRaising: false,
      charityHashedRandom: null,
      raiser: this.props.raiser,
      participant: null
    };
  }

  getPhase() {
    const now = Date.now();
    const raiser = this.state.raiser;

    if (now > raiser.kickoffTime && now < raiser.revealTime) {
      if (!this.state.charityHashedRandom) {
        return "SEED";
      } else if (!this.state.participant) {
        if (!this.state.hasBegun) {
          return "BEGIN";
        } else {
          return "PARTICIPATE";
        }
      } else {
        if (!this.state.isRaising) {
          return "PARTICIPATED";
        } else {
          return "RAISE";
        }
      }
    } else if (now > raiser.revealTime && now < raiser.endTime) {
      if (!this.state.participant) {
        return "ERROR";
      } else {
        return "REVEAL";
      }
    }

    return "END";
  }

  setLoading = (loading) => {
    this.setState({ isLoading: loading });
  }

  handleBegin = () => {
    this.setState({ hasBegun: true });
  }

  handleGetMoreEntries = () => {
    this.setState({ isRaising: true });
  }

  handleParticipate = ({ seed, numOfEntries }) => {
    this.props.onParticipate({ seed, numOfEntries });
  }

  handleRaise = () => {
    this.setState({ isRaising: false });
  }

  render() {
    const phase = this.getPhase();

    return (
      <div className="seedom-puck">
        <SeedomCircles percentage={50} isLoading={this.state.isLoading} raiser={this.state.raiser} />
        <SeedomSeed isShown={phase === 'SEED'} />
        <SeedomBegin isShown={phase === 'BEGIN'} onBegin={this.handleBegin} />
        <SeedomParticipate isShown={phase === 'PARTICIPATE'} setLoading={this.setLoading} onParticipate={this.handleParticipate} />
        <SeedomParticipated isShown={phase === 'PARTICIPATED'} participant={this.state.participant} onGetMoreEntries={this.handleGetMoreEntries} />
        <SeedomRaise isShown={phase === 'RAISE'} setLoading={this.setLoading} onRaise={this.handleRaise} />
        <SeedomReveal isShown={phase === 'REVEAL'} setLoading={this.setLoading} />
        <SeedomEnd isShown={phase === 'END'} />
        <SeedomWin isShown={phase === 'WIN'} />
        <SeedomError isShown={phase === 'ERROR'} error={!this.state.participant ? "participation" : null} />
      </div>
    );
  }
}

export default SeedomPuck;
