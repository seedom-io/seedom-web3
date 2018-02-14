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
import Ticket from './components/Ticket';
import seedomLogo from '../../../../../../seedom-assets/logo/o/seedom-o-outlined-white-transparent.svg';
import './index.scss';

const PHASE_REFRESH = 1000;

const getPhase = (raiser) => {
  const now = Date.now();

  // participation phase
  if (now < raiser.revealTime) {
    return 'participation';
  }

  // revelation phase
  if (now >= raiser.revealTime && now < raiser.endTime) {
    return 'revelation';
  }

  // end phase
  if (now >= raiser.endTime && now < raiser.expireTime) {
    return 'end';
  }

  // expiration phase
  if (now >= raiser.expireTime && now < raiser.destructTime) {
    return 'expiration';
  }

  // destruction phase
  return 'destruction';
};

const getComponent = ({
  networkId,
  account,
  phase,
  state,
  participant,
  random,
  balances,
  isLoading,
  hasBegun,
  hasSeenTicket,
  isObtainingMoreEntries,
  hasSkippedWithdraw
}) => {
  return 'ticket';
  // balances?
  if ((Object.keys(balances).length > 0) && !hasSkippedWithdraw) {
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

  // metamask check
  if (!networkId || !account) {
    return 'error-metamask';
  }

  // switch on phase
  switch (phase) {
    case 'participation':
      if (bytes.isZero32(state.charityHashedRandom)) {
        return 'seed';
      }

      if (bytes.isZero32(participant.hashedRandom)) {
        if (!hasBegun) {
          return 'begin';
        }
        return 'participate';
      }

      if (!hasSeenTicket && random) {
        return 'ticket';
      }

      if (!isObtainingMoreEntries && !isLoading.isRaising) {
        return 'participated';
      }

      return 'raise';

    case 'revelation':
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

    case 'end':
      if (bytes.isZero32(participant.charityHashedRandom)) {
        return 'error-charityHashedRandom';
      }

      return 'end';

    case 'expiration':
      return 'cancel';

    default:
      return null;
  }
};

class Puck extends Component {
  static propTypes = {
    networkId: PropTypes.number,
    account: PropTypes.string,
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
    networkId: null,
    account: null,
    raiser: null,
    state: null,
    participant: null,
    balances: [],
    isLoading: null
  };

  constructor(props) {
    super(props);

    this.state = {
      phase: null,
      random: null,
      hasBegun: false,
      hasSeenTicket: false,
      isObtainingMoreEntries: false,
      hasSkippedWithdraw: false
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const newPhase = getPhase(this.props.raiser);
      // if the phase changed, update state
      if (newPhase !== this.state.phase) {
        this.setState({ phase: newPhase });
      }
    }, PHASE_REFRESH);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleBegin = () => {
    this.setState({ hasBegun: true });
  }

  handleParticipate = ({ random, entries }) => {
    // temporarily save random for the ticket
    this.setState({ random }, () => {
      this.props.onParticipate({ random, entries });
    });
  }

  handleTicketSeen = () => {
    // remove random forever
    this.setState({
      random: null,
      hasSeenTicket: true
    });
  }

  handleGetMoreEntries = () => {
    this.setState({ isObtainingMoreEntries: true });
  }

  handleRaise = (entries) => {
    this.setState({ isObtainingMoreEntries: false }, () => {
      this.props.onRaise(entries);
    });
  }

  handleReveal = (random) => {
    this.props.onReveal(random);
  }

  handleWithdraw = (contractAddress) => {
    this.props.onWithdraw(contractAddress);
  }

  handleWithdrawSkipped = () => {
    this.setState({ hasSkippedWithdraw: true });
  }

  handleCancel = () => {
    this.props.onCancel();
  }

  render() {
    const {
      phase,
      random,
      hasBegun,
      hasSeenTicket,
      isObtainingMoreEntries,
      hasSkippedWithdraw
    } = this.state;

    const {
      networkId,
      account,
      raiser,
      state,
      participant,
      balances,
      isLoading
    } = this.props;

    const component = getComponent({
      networkId,
      account,
      phase,
      raiser,
      state,
      participant,
      random,
      balances,
      isLoading,
      hasBegun,
      hasSeenTicket,
      isObtainingMoreEntries,
      hasSkippedWithdraw
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
          <Circles percentage={50} isLoading={isAnyLoading} raiser={raiser} />
          <Seed isShown={component === 'seed'} />
          <Begin isShown={component === 'begin'} raiser={raiser} onBegin={this.handleBegin} />
          <Participate isShown={component === 'participate'} raiser={raiser} isParticipating={isLoading.isParticipating} onParticipate={this.handleParticipate} />
          <Ticket isShown={component === 'ticket'} raiser={raiser} random={random} onTicketSeen={this.handleTicketSeen} />
          <Participated isShown={component === 'participated'} participant={participant} onGetMoreEntries={this.handleGetMoreEntries} />
          <Raise isShown={component === 'raise'} raiser={raiser} isRaising={isLoading.isRaising} onRaise={this.handleRaise} />
          <Reveal isShown={component === 'reveal'} isRevealing={isLoading.isRevealing} setLoading={this.setLoading} onReveal={this.handleReveal} />
          <Revealed isShown={component === 'revealed'} participant={participant} />
          <End isShown={component === 'end'} />
          <Win isShown={component === 'win'} state={state} />
          <Withdraw isShown={component === 'withdraw'} balances={balances} isWithdrawing={isLoading.isWithdrawing} onWithdraw={this.handleWithdraw} onWithdrawSkipped={this.handleWithdrawSkipped} />
          <Cancel isShown={component === 'cancel'} isCancelling={isLoading.isCancelling} onCancel={this.handleCancel} />
          <Cancelled isShown={component === 'cancelled'} />
          <Error isShown={component && component.startsWith('error')} error={component} />
        </div>
      </div>
    );
  }
}

export default Puck;
