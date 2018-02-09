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
import seedomLogo from '../../../../img/logos/seedom.svg';
import './index.scss';

const getPhase = ({
  hasMetamask,
  raiser,
  state,
  participant,
  balances,
  isLoading,
  hasBegun,
  isObtainingMoreEntries,
  isWithdrawSkipped
}) => {
  const now = Date.now();

  // metamask check
  if (!hasMetamask) {
    return 'error-metamask';
  }

  // balances?
  if ((Object.keys(balances).length > 0) && !isWithdrawSkipped) {
    return 'withdraw';
  }

  // winner?
  if (!bytes.isZero20(state.winner)) {
    return 'win';
  }

  // cancelled?
  if (state.cancelled) {
    return 'cancel';
  }

  // participation phase
  if (now < raiser.revealTime) {
    if (bytes.isZero32(state.charityHashedRandom)) {
      return 'seed';
    }

    if (bytes.isZero32(participant.hashedRandom)) {
      if (!hasBegun) {
        return 'begin';
      }
      return 'participate';
    }

    if (!isObtainingMoreEntries && !isLoading.isRaising) {
      return 'participated';
    }

    return 'raise';
  }

  // revelation phase
  if (now > raiser.revealTime && now < raiser.endTime) {
    if (bytes.isZero32(state.charityHashedRandom)) {
      return 'error-charityHashedRandom';
    }

    if (bytes.isZero32(participant.hashedRandom)) {
      return 'error-hashedRandom';
    }

    if (bytes.isZero32(participant.random)) {
      return 'reveal';
    }

    return 'revealed';
  }

  // end phase
  if (now > raiser.endTime && now < raiser.expireTime) {
    if (bytes.isZero32(participant.charityHashedRandom)) {
      return 'error-charityHashedRandom';
    }

    return 'end';
  }

  return 'cancel';
};

class Puck extends Component {
  static propTypes = {
    hasMetamask: PropTypes.bool,
    raiser: PropTypes.shape(),
    state: PropTypes.shape(),
    participant: PropTypes.shape(),
    balances: PropTypes.shape(),
    isLoading: PropTypes.shape(),
    onParticipate: PropTypes.func.isRequired,
    onRaise: PropTypes.func.isRequired,
    onReveal: PropTypes.func.isRequired,
    onWithdraw: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  }

  static defaultProps = {
    hasMetamask: false,
    raiser: null,
    state: null,
    participant: null,
    balances: [],
    isLoading: null
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

  handleRaise = (numOfEntries) => {
    this.setState({ isObtainingMoreEntries: false }, () => {
      this.props.onRaise(numOfEntries);
    });
  }

  handleReveal = (random) => {
    this.props.onReveal(random);
  }

  handleWithdraw = (contractAddress) => {
    this.props.onWithdraw(contractAddress);
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
      state,
      participant,
      balances,
      isLoading
    } = this.props;

    const phase = getPhase({
      hasMetamask,
      raiser,
      state,
      participant,
      balances,
      isLoading,
      hasBegun,
      isObtainingMoreEntries,
      isWithdrawSkipped
    });

    const isAnyLoading =
      isLoading.isParticipating ||
      isLoading.isRaising ||
      isLoading.isRevealing ||
      isLoading.isWithdrawing ||
      isLoading.isCancelling;

    return (
      <div className="seedom-puck">
        <div className="intro">
          <img alt="seedom" src={seedomLogo} />
        </div>
        <div className="interface">
          <Circles percentage={50} isLoading={isAnyLoading} raiser={raiser} now={this.state.now} />
          <Seed isShown={phase === 'seed'} />
          <Begin isShown={phase === 'begin'} onBegin={this.handleBegin} />
          <Participate isShown={phase === 'participate'} isParticipating={isLoading.isParticipating} onParticipate={this.handleParticipate} />
          <Participated isShown={phase === 'participated'} entries={participant.entries} onGetMoreEntries={this.handleGetMoreEntries} />
          <Raise isShown={phase === 'raise'} isRaising={isLoading.isRaising} onRaise={this.handleRaise} />
          <Reveal isShown={phase === 'reveal'} isRevealing={isLoading.isRevealing} setLoading={this.setLoading} onReveal={this.handleReveal} />
          <Revealed isShown={phase === 'revealed'} entries={participant.entries} />
          <End isShown={phase === 'end'} />
          <Win isShown={phase === 'win'} winner={state.winner} winnerRandom={state.winnerRandom} />
          <Withdraw isShown={phase === 'withdraw'} balances={balances} isWithdrawing={isLoading.isWithdrawing} onWithdraw={this.handleWithdraw} onWithdrawSkipped={this.handleWithdrawSkipped} />
          <Cancel isShown={phase === 'cancel'} isCancelling={isLoading.isCancelling} onCancel={this.handleCancel} />
          <Cancelled isShown={phase === 'cancelled'} />
          <Error isShown={phase.startsWith('error')} error={phase} />
        </div>
      </div>
    );
  }
}

export default Puck;
