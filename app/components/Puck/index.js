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
  random,
  winner,
  balance,
  cancelled,
  isParticipating,
  isRaising,
  isRevealing,
  isWithdrawing,
  isCancelling,
  hasBegun,
  isObtainingMoreEntries,
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

  if (!raiser) {
    return 'error-metamask';
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

    if (!isObtainingMoreEntries && !isRaising) {
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
    hasMetamask: PropTypes.bool,
    raiser: PropTypes.shape(),
    charityHashedRandom: PropTypes.string,
    entries: PropTypes.number,
    hashedRandom: PropTypes.string,
    random: PropTypes.string,
    winner: PropTypes.string,
    winnerRandom: PropTypes.string,
    balance: PropTypes.number,
    cancelled: PropTypes.bool,
    isParticipating: PropTypes.bool.isRequired,
    isRaising: PropTypes.bool.isRequired,
    isRevealing: PropTypes.bool.isRequired,
    isWithdrawing: PropTypes.bool.isRequired,
    isCancelling: PropTypes.bool.isRequired,
    onParticipate: PropTypes.func.isRequired,
    onRaise: PropTypes.func.isRequired,
    onReveal: PropTypes.func.isRequired,
    onWithdraw: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  }

  static defaultProps = {
    hasMetamask: false,
    raiser: null,
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
      hasBegun: false,
      isObtainingMoreEntries: false,
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

  handleBegin = () => {
    this.setState({ hasBegun: true });
  }

  handleParticipate = ({ random, numOfEntries }) => {
    this.props.onParticipate({ random, numOfEntries }, () => {
      this.setState({ hasBegun: false });
    });
  }

  handleGetMoreEntries = () => {
    this.setState({ isObtainingMoreEntries: true });
  }

  handleRaise = ({ numOfEntries }) => {
    this.setState({ isObtainingMoreEntries: false }, () => {
      this.props.onRaise({ numOfEntries });
    });
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
    const {
      hasBegun,
      isObtainingMoreEntries,
      isWithdrawSkipped
    } = this.state;

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
      isRaising,
      isRevealing,
      isWithdrawing,
      isCancelling
    } = this.props;

    const phase = getPhase({
      hasMetamask,
      raiser,
      charityHashedRandom,
      hashedRandom,
      random,
      winner,
      balance,
      cancelled,
      isParticipating,
      isRaising,
      isRevealing,
      isWithdrawing,
      isCancelling,
      hasBegun,
      isObtainingMoreEntries,
      isWithdrawSkipped
    });

    const isLoading =
      isParticipating ||
      isRaising ||
      isRevealing ||
      isWithdrawing ||
      isCancelling;

    return (
      <div className="seedom-puck">
        <div className="intro">
          <img alt="seedom" src={seedomLogo} />
        </div>
        <div className="interface">
          <Circles percentage={50} isLoading={isLoading} raiser={raiser} now={this.state.now} />
          <Seed isShown={phase === 'seed'} />
          <Begin isShown={phase === 'begin'} onBegin={this.handleBegin} />
          <Participate isShown={phase === 'participate'} isParticipating={isParticipating} onParticipate={this.handleParticipate} />
          <Participated isShown={phase === 'participated'} entries={entries} onGetMoreEntries={this.handleGetMoreEntries} />
          <Raise isShown={phase === 'raise'} isRaising={isRaising} onRaise={this.handleRaise} />
          <Reveal isShown={phase === 'reveal'} isRevealing={isRevealing} setLoading={this.setLoading} onReveal={this.handleReveal} />
          <Revealed isShown={phase === 'revealed'} entries={entries} />
          <End isShown={phase === 'end'} />
          <Win isShown={phase === 'win'} winner={winner} winnerRandom={winnerRandom} />
          <Withdraw isShown={phase === 'withdraw'} balance={balance} isWithdrawing={isWithdrawing} onWithdraw={this.handleWithdraw} onWithdrawSkipped={this.handleWithdrawSkipped} />
          <Cancel isShown={phase === 'cancel'} isCancelling={isCancelling} onCancel={this.handleCancel} />
          <Cancelled isShown={phase === 'cancelled'} />
          <Error isShown={phase.startsWith('error')} error={phase} />
        </div>
      </div>
    );
  }
}

export default Puck;
