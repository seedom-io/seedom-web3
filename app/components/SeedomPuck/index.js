import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SeedomCircles from '../SeedomCircles';
import SeedomSeed from '../SeedomSeed';
import SeedomBegin from '../SeedomBegin';
import SeedomParticipate from '../SeedomParticipate';
import SeedomParticipated from '../SeedomParticipated';
import SeedomRaise from '../SeedomRaise';
import SeedomReveal from '../SeedomReveal';
import SeedomRevealed from '../SeedomRevealed';
import SeedomEnd from '../SeedomEnd';
import SeedomWin from '../SeedomWin';
import SeedomError from '../SeedomError';
import seedomLogo from '../../img/logos/seedom.svg';
import './index.scss';

const getPhase = ({
  charityHashedRandom,
  raiser,
  hasBegun,
  isRaising,
  participant,
  winner
}) => {
  const now = Date.now();

  if (now > raiser.kickoffTime && now < raiser.revealTime) {
    if (!charityHashedRandom) {
      return 'seed';
    } else if (!participant) {
      if (!hasBegun) {
        return 'begin';
      }
      return 'participate';
    }
    if (!isRaising) {
      return 'participated';
    }
    return 'raise';
  } else if (now > raiser.revealTime && now < raiser.endTime) {
    if (!participant) {
      return 'error';
    }
    return 'reveal';
  }
  if (!winner) {
    return 'end';
  }
  return 'win';
};

class SeedomPuck extends Component {
  static propTypes = {
    onParticipate: PropTypes.func.isRequired,
    participant: PropTypes.shape({
      entries: PropTypes.number.isRequired,
      hashedRandom: PropTypes.string.isRequired
    }),
    raiser: PropTypes.shape({
      endTime: PropTypes.instanceOf(Date).isRequired,
      expireTime: PropTypes.instanceOf(Date).isRequired,
      kickoffTime: PropTypes.instanceOf(Date).isRequired,
      revealTime: PropTypes.instanceOf(Date).isRequired,
      valuePerEntry: PropTypes.number.isRequired
    }).isRequired,
    winner: PropTypes.string,
    winningParticipant: PropTypes.shape({
      random: PropTypes.string.isRequired
    })
  }

  static defaultProps = {
    participant: null,
    winner: null,
    winningParticipant: null
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      hasBegun: false,
      isRaising: false,
      charityHashedRandom: null,
    };
  }

  setLoading = loading => {
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

  handleReveal = () => {
    this.setState({ isRaising: false });
  }

  render() {
    const { charityHashedRandom, hasBegun, isRaising, isLoading } = this.state;
    const { participant, raiser, winner, winningParticipant } = this.props;

    const phase = getPhase({
      charityHashedRandom,
      raiser,
      hasBegun,
      isRaising,
      participant,
      winner
    });

    return (
      <div className="seedom-puck">
        <div className="intro">
          <img alt="seedom" src={seedomLogo} />
        </div>
        <div className="interface">
          <SeedomCircles percentage={50} isLoading={isLoading} raiser={raiser} />
          <SeedomSeed isShown={phase === 'seed'} />
          <SeedomBegin isShown={phase === 'begin'} onBegin={this.handleBegin} />
          <SeedomParticipate isShown={phase === 'participate'} setLoading={this.setLoading} onParticipate={this.handleParticipate} />
          <SeedomParticipated isShown={phase === 'participated'} participant={participant} onGetMoreEntries={this.handleGetMoreEntries} />
          <SeedomRaise isShown={phase === 'raise'} setLoading={this.setLoading} onRaise={this.handleRaise} />
          <SeedomReveal isShown={phase === 'reveal'} setLoading={this.setLoading} onReveal={this.handleReveal} />
          <SeedomRevealed isShown={phase === 'revealed'} />
          <SeedomEnd isShown={phase === 'end'} />
          <SeedomWin isShown={phase === 'win'} winner={winner} winningParticipant={winningParticipant} />
          <SeedomError isShown={phase === 'error'} error={!participant ? 'participation' : null} />
        </div>
      </div>
    );
  }
}

export default SeedomPuck;
