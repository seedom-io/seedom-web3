import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as bytes from '../../utils/bytes';
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
  hasMetamask,
  raiser,
  charityHashedRandom,
  hashedRandom,
  hasBegun,
  isRaising,
  winner
}) => {
  const now = Date.now();

  if (!hasMetamask) {
    return 'error-metamask';
  }
  if (now > raiser.kickoffTime && now < raiser.revealTime) {
    if (bytes.isZero32(charityHashedRandom)) {
      return 'seed';
    } else if (bytes.isZero32(hashedRandom)) {
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
    if (bytes.isZero32(charityHashedRandom)) {
      return 'error-charityHashedRandom';
    } else if (bytes.isZero32(hashedRandom)) {
      return 'error-hashedRandom';
    }
    return 'reveal';
  }
  if (bytes.isZero20(winner)) {
    if (bytes.isZero32(charityHashedRandom)) {
      return 'error-charityHashedRandom';
    }
    return 'end';
  }
  return 'win';
};

class SeedomPuck extends Component {
  static propTypes = {
    hasMetamask: PropTypes.bool.isRequired,
    raiser: PropTypes.shape({
      endTime: PropTypes.instanceOf(Date).isRequired,
      expireTime: PropTypes.instanceOf(Date).isRequired,
      kickoffTime: PropTypes.instanceOf(Date).isRequired,
      revealTime: PropTypes.instanceOf(Date).isRequired,
      valuePerEntry: PropTypes.number.isRequired
    }).isRequired,
    charityHashedRandom: PropTypes.string,
    entries: PropTypes.number,
    hashedRandom: PropTypes.string,
    winner: PropTypes.string,
    winnerRandom: PropTypes.string,
    onParticipate: PropTypes.func.isRequired,
    onRaise: PropTypes.func.isRequired,
    onReveal: PropTypes.func.isRequired,
    onWithdraw: PropTypes.func.isRequired
  }

  static defaultProps = {
    charityHashedRandom: null,
    entries: 0,
    hashedRandom: null,
    winner: null,
    winnerRandom: null
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      hasBegun: false,
      isRaising: false,
      now: new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        now: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setLoading = loading => {
    this.setState({ isLoading: loading });
  }

  handleBegin = () => {
    this.setState({ hasBegun: true });
  }

  handleParticipate = ({ random, numOfEntries }) => {
    this.props.onParticipate({ random, numOfEntries });
  }

  handleGetMoreEntries = () => {
    this.setState({ isRaising: true });
  }

  handleRaise = ({ numOfEntries }) => {
    this.props.onRaise({ numOfEntries });
    this.setState({ isRaising: false });
  }

  handleReveal = ({ random }) => {
    this.props.onReveal({ random });
  }

  render() {
    const { hasBegun, isRaising, isLoading } = this.state;
    const {
      hasMetamask,
      raiser,
      charityHashedRandom,
      hashedRandom,
      entries,
      winner,
      winnerRandom
    } = this.props;

    const phase = getPhase({
      hasMetamask,
      raiser,
      charityHashedRandom,
      hashedRandom,
      hasBegun,
      isRaising,
      winner
    });

    return (
      <div className="seedom-puck">
        <div className="intro">
          <img alt="seedom" src={seedomLogo} />
        </div>
        <div className="interface">
          <SeedomCircles percentage={50} isLoading={isLoading} raiser={raiser} now={this.state.now} />
          <SeedomSeed isShown={phase === 'seed'} />
          <SeedomBegin isShown={phase === 'begin'} onBegin={this.handleBegin} />
          <SeedomParticipate isShown={phase === 'participate'} setLoading={this.setLoading} onParticipate={this.handleParticipate} />
          <SeedomParticipated isShown={phase === 'participated'} entries={entries} onGetMoreEntries={this.handleGetMoreEntries} />
          <SeedomRaise isShown={phase === 'raise'} setLoading={this.setLoading} onRaise={this.handleRaise} />
          <SeedomReveal isShown={phase === 'reveal'} setLoading={this.setLoading} onReveal={this.handleReveal} />
          <SeedomRevealed isShown={phase === 'revealed'} />
          <SeedomEnd isShown={phase === 'end'} />
          <SeedomWin isShown={phase === 'win'} winner={winner} winnerRandom={winnerRandom} />
          <SeedomError isShown={phase.startsWith('error')} error={phase} />
        </div>
      </div>
    );
  }
}

export default SeedomPuck;
