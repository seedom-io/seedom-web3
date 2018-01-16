import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as bytes from '../../utils/bytes';
import Circles from './components/Circles';
import Seed from './components/Seed';
import Begin from './components/Begin';
import Participate from './components/Participate';
import Participated from './components/Participated';
import Raise from './components/Raise';
import Reveal from './components/Reveal';
import Revealed from './components/Revealed';
import End from './components/End';
import Win from './components/Win';
import Withdraw from './components/Withdraw';
import Cancel from './components/Cancel';
import Cancelled from './components/Cancelled';
import Error from './components/Error';
import seedomLogo from '../../img/logos/seedom.svg';
import './index.scss';

const getPhase = ({
  hasMetamask,
  raiser,
  charityHashedRandom,
  hashedRandom,
  hasBegun,
  isRaising,
  random,
  winner,
  balance,
  cancelled,
  isWithdrawSkipped
}) => {
  const now = Date.now();

  if (!hasMetamask) {
    return 'error-metamask';
  }

  if (balance > 0) {
    if (!isWithdrawSkipped) {
      return 'withdraw';
    }
  }

  if (cancelled) {
    return 'cancelled';
  }

  // participation phase
  if (now > raiser.kickoffTime && now < raiser.revealTime) {
    if (bytes.isZero32(charityHashedRandom)) {
      return 'seed';
    }

    if (bytes.isZero32(hashedRandom)) {
      if (!hasBegun) {
        return 'begin';
      }
      return 'participate';
    }

    if (!isRaising) {
      return 'participated';
    }
    return 'raise';
  }

  // revelation phase
  if (now > raiser.revealTime && now < raiser.endTime) {
    if (bytes.isZero32(charityHashedRandom)) {
      return 'error-charityHashedRandom';
    }

    if (bytes.isZero32(hashedRandom)) {
      return 'error-hashedRandom';
    }

    if (bytes.isZero32(random)) {
      return 'reveal';
    }

    return 'revealed';
  }

  // end phase
  if (now > raiser.endTime && now < raiser.expireTime) {
    if (bytes.isZero32(charityHashedRandom)) {
      return 'error-charityHashedRandom';
    }

    if (bytes.isZero20(winner)) {
      return 'end';
    }

    return 'win';
  }

  // expiration phase
  if (now > raiser.expireTime) {
    if (bytes.isZero20(winner)) {
      return 'cancel';
    }

    return 'win';
  }
};

class Puck extends Component {
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
    random: PropTypes.string,
    winner: PropTypes.string,
    winnerRandom: PropTypes.string,
    balance: PropTypes.number,
    cancelled: PropTypes.bool,
    isParticipating: PropTypes.bool.isRequired,
    onParticipate: PropTypes.func.isRequired,
    onRaise: PropTypes.func.isRequired,
    onReveal: PropTypes.func.isRequired,
    onWithdraw: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  }

  static defaultProps = {
    charityHashedRandom: null,
    entries: 0,
    hashedRandom: null,
    random: null,
    winner: null,
    winnerRandom: null,
    balance: 0,
    cancelled: false
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      hasBegun: false,
      isRaising: false,
      isWithdrawSkipped: false,
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

  handleWithdraw = () => {
    this.props.onWithdraw();
  }

  handleWithdrawSkipped = () => {
    this.setState({ isWithdrawSkipped: true });
  }

  handleCancel = () => {
    this.props.onCancel();
  }

  render() {
    const { hasBegun, isRaising, isLoading, isWithdrawSkipped } = this.state;
    const {
      hasMetamask,
      raiser,
      charityHashedRandom,
      hashedRandom,
      entries,
      random,
      winner,
      winnerRandom,
      balance,
      cancelled,
      isParticipating,
      onParticipate
    } = this.props;

    const phase = getPhase({
      hasMetamask,
      raiser,
      charityHashedRandom,
      hashedRandom,
      random,
      hasBegun,
      isRaising,
      winner,
      balance,
      cancelled,
      isWithdrawSkipped
    });

    return (
      <div className="seedom-puck">
        <div className="intro">
          <img alt="seedom" src={seedomLogo} />
        </div>
        <div className="interface">
          <Circles percentage={50} isLoading={isLoading || isParticipating} raiser={raiser} now={this.state.now} />
          <Seed isShown={phase === 'seed'} />
          <Begin isShown={phase === 'begin'} onBegin={this.handleBegin} />
          <Participate isShown={phase === 'participate'} isParticipating={isParticipating} onParticipate={onParticipate} />
          <Participated isShown={phase === 'participated'} entries={entries} onGetMoreEntries={this.handleGetMoreEntries} />
          <Raise isShown={phase === 'raise'} setLoading={this.setLoading} onRaise={this.handleRaise} />
          <Reveal isShown={phase === 'reveal'} setLoading={this.setLoading} onReveal={this.handleReveal} />
          <Revealed isShown={phase === 'revealed'} />
          <End isShown={phase === 'end'} />
          <Win isShown={phase === 'win'} winner={winner} winnerRandom={winnerRandom} />
          <Withdraw isShown={phase === 'withdraw'} balance={balance} onWithdraw={this.handleWithdraw} onWithdrawSkipped={this.handleWithdrawSkipped} />
          <Cancel isShown={phase === 'cancel'} onCancel={this.handleCancel} />
          <Cancelled isShown={phase === 'cancelled'} />
          <Error isShown={phase.startsWith('error')} error={phase} />
        </div>
      </div>
    );
  }
}

export default Puck;
