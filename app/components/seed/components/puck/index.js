import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as bytes from '../../../../utils/bytes';
import Circles from './components/circles';
import Seed from './components/seed';
import Begin from './components/begin';
import Participate from './components/participate';
import Participated from './components/participated';
import Raise from './components/raise';
import Reveal from './components/reveal';
import End from './components/end';
import Select from './components/select';
import Withdraw from './components/withdraw';
import Cancel from './components/cancel';
import Cancelled from './components/cancelled';
import Error from './components/error';
import Ticket from './components/ticket';
import seedomLogo from '../../../../../../seedom-assets/logo/o/seedom-o-white-transparent.svg';
import './index.scss';

const PHASE_REFRESH = 1000;

const getPhase = (raiser) => {
  const now = Date.now();

  // participation phase
  if (now < raiser.endTime) {
    return 'participation';
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
  network,
  account,
  phase,
  state,
  participant,
  random,
  balances,
  isLoading,
  hasBegun,
  hasSeenTicket,
  hasStartedRaising,
  hasSkippedWithdraw
}) => {
  return 'begin';
  // balances?
  if ((Object.keys(balances).length > 0) && !hasSkippedWithdraw) {
    return 'withdraw';
  }

  // winner?
  if (!bytes.isZero20(state.winner)) {
    return 'select';
  }

  // cancelled?
  if (state.cancelled) {
    return 'cancel';
  }

  // metamask check
  if (!network || !account) {
    return 'error-metamask';
  }

  // wait for a participant
  if (!participant) {
    return null;
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

      if (!hasStartedRaising && !isLoading.isRaising) {
        return 'participated';
      }

      return 'raise';

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
    network: PropTypes.string,
    account: PropTypes.string,
    raiser: PropTypes.shape(),
    state: PropTypes.shape(),
    participant: PropTypes.shape(),
    isLoading: PropTypes.bool,
    onParticipate: PropTypes.func.isRequired,
    onRaise: PropTypes.func.isRequired,
    onWithdraw: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  }

  static defaultProps = {
    network: null,
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
      hasStartedRaising: false,
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

  handleStartedRaising = () => {
    this.setState({ hasStartedRaising: true });
  }

  handleRaisingCancelled = () => {
    this.setState({ hasStartedRaising: false });
  }

  handleRaise = (entries) => {
    this.setState({ hasStartedRaising: false }, () => {
      this.props.onRaise(entries);
    });
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
      hasStartedRaising,
      hasSkippedWithdraw
    } = this.state;

    const {
      network,
      account,
      raiser,
      state,
      participant,
      balances,
      isLoading
    } = this.props;

    const component = getComponent({
      network,
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
      hasStartedRaising,
      hasSkippedWithdraw
    });

    return (
      <div className="seedom-puck">
        <div className="intro">
          <img alt="seedom" src={seedomLogo} />
        </div>
        <div className="interface">
          <Circles percentage={50} isLoading={isLoading} raiser={raiser} />
          <Seed isShown={component === 'seed'} />
          <Begin isShown={component === 'begin'} raiser={raiser} onBegin={this.handleBegin} />
          <Participate isShown={component === 'participate'} raiser={raiser} isParticipating={isLoading} onParticipate={this.handleParticipate} />
          <Ticket isShown={component === 'ticket'} raiser={raiser} random={random} onTicketSeen={this.handleTicketSeen} />
          <Participated isShown={component === 'participated'} participant={participant} onStartedRaising={this.handleStartedRaising} />
          <Raise isShown={component === 'raise'} raiser={raiser} isRaising={isLoading} onRaise={this.handleRaise} onRaisingCancelled={this.handleRaisingCancelled} />
          <Reveal isShown={component === 'reveal'} />
          <End isShown={component === 'end'} />
          <Select isShown={component === 'select'} state={state} network={network} />
          <Withdraw isShown={component === 'withdraw'} balances={balances} isWithdrawing={isLoading} onWithdraw={this.handleWithdraw} onWithdrawSkipped={this.handleWithdrawSkipped} />
          <Cancel isShown={component === 'cancel'} isCancelling={isLoading} onCancel={this.handleCancel} />
          <Cancelled isShown={component === 'cancelled'} />
          <Error isShown={component && component.startsWith('error')} error={component} />
        </div>
      </div>
    );
  }
}

export default Puck;
