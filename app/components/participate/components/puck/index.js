import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as bytes from '../../../../utils/bytes';
import Circles from './components/circles';
import Begin from './components/begin';
import BeginningFailed from './components/beginningFailed';
import Welcome from './components/welcome';
import Participate from './components/participate';
import Participation from './components/participation';
import Raise from './components/raise';
import Reveal from './components/reveal';
import End from './components/end';
import Selection from './components/selection';
import Withdraw from './components/withdraw';
import Cancel from './components/cancel';
import Cancelled from './components/cancelled';
import Ethereum from './components/ethereum';
import Network from './components/network';
import Account from './components/account';
import ParticipationFailed from './components/participationFailed';
import Badge from './components/badge';
import Footer from './components/footer';
import seedomLogo from '../../../../../../seedom-assets/logo/o/seedom-o-white-transparent.svg';
import './index.scss';

const PHASE_REFRESH = 1000;

const getPhase = (deployment) => {
  if (!deployment) {
    return null;
  }

  const now = Date.now();
  // participation phase
  if (now < deployment.endTime) {
    return 'participation';
  }

  // end phase
  if (now >= deployment.endTime && now < deployment.expireTime) {
    return 'end';
  }

  // expiration phase
  if (now >= deployment.expireTime && now < deployment.destructTime) {
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
  balances,
  isLoading,
  isParticipating,
  isBadging,
  isRaising,
  isWithdrawing
}) => {
  // wait for a network
  if (!network) {
    return null;
  }

  // ethereum check
  if (network && !account) {
    return 'ethereum';
  }

  // network check
  if (!network.supported || !network.deployed) {
    return 'network';
  }

  // wait for state
  if (!state) {
    return null;
  }

  // selection?
  if (!bytes.isZero20(state.participant)) {
    return 'selection';
  }

  // account check
  if (!account) {
    return 'account';
  }

  // balances?
  if (balances && (Object.keys(balances).length > 0) && isWithdrawing) {
    return 'withdraw';
  }

  // cancelled?
  if (state.cancelled) {
    return 'cancelled';
  }

  // wait for a participant
  if (!participant) {
    return null;
  }

  // switch on phase
  switch (phase) {
    case 'participation':
      if (bytes.isZero32(state.causeSecret)) {
        return 'begin';
      }

      if (participant.message === '') {
        if (!isParticipating) {
          return 'welcome';
        }
        return 'participate';
      }

      if (isBadging) {
        return 'badge';
      }

      if (!isRaising && !isLoading) {
        return 'participation';
      }

      return 'raise';

    case 'end':
      if (bytes.isZero32(state.causeSecret)) {
        return 'beginningFailed';
      }

      if (participant.message === '') {
        return 'participationFailed';
      }

      if (state.ownerMessage === '') {
        return 'reveal';
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
    network: PropTypes.shape(),
    account: PropTypes.string,
    deployment: PropTypes.shape(),
    cause: PropTypes.shape(),
    state: PropTypes.shape(),
    participant: PropTypes.shape(),
    balances: PropTypes.shape(),
    isLoading: PropTypes.bool,
    primaryContractAddresses: PropTypes.shape(),
    onParticipate: PropTypes.func.isRequired,
    onRaise: PropTypes.func.isRequired,
    onWithdraw: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired
  };

  static defaultProps = {
    network: null,
    account: null,
    deployment: null,
    cause: null,
    state: null,
    participant: null,
    balances: null,
    isLoading: false,
    primaryContractAddresses: null
  };

  constructor(props) {
    super(props);
    this.state = {
      phase: null,
      isParticipating: false,
      isBadging: false,
      isRaising: false,
      isWithdrawing: true
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const newPhase = getPhase(this.props.deployment);
      // if the phase changed, update state
      if (newPhase !== this.state.phase) {
        this.setState({ phase: newPhase });
      }
    }, PHASE_REFRESH);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleCountMeIn = () => {
    this.setState({ isParticipating: true });
  }

  handleParticipate = ({ message, entries, email }) => {
    this.setState({ isBadging: true }, () => {
      this.props.onParticipate({ message, entries, email });
    });
  }

  handleBadging = () => {
    this.setState({ isBadging: true });
  }

  handleBadgingOver = () => {
    this.setState({ isBadging: false });
  }

  handleRaising = () => {
    this.setState({ isRaising: true });
  }

  handleRaisingCancelled = () => {
    this.setState({ isRaising: false });
  }

  handleRaise = (entries) => {
    this.setState({ isRaising: false }, () => {
      this.props.onRaise(entries);
    });
  }

  handleWithdraw = (contractAddress) => {
    this.props.onWithdraw(contractAddress);
  }

  handleWithdrawSkipped = () => {
    this.setState({ isWithdrawing: false });
  }

  handleCancel = () => {
    this.props.onCancel();
  }

  render() {
    const {
      phase,
      isParticipating,
      isBadging,
      isRaising,
      isWithdrawing
    } = this.state;

    const {
      network,
      account,
      deployment,
      cause,
      state,
      participant,
      balances,
      isLoading,
      primaryContractAddresses,
      onPlay
    } = this.props;

    const component = getComponent({
      network,
      account,
      phase,
      deployment,
      state,
      participant,
      balances,
      isLoading,
      isParticipating,
      isBadging,
      isRaising,
      isWithdrawing
    });

    return (
      <div className="seedom-puck">
        <div className="intro">
          <div className="tagline">
            <div>
              <span className="bold">fun</span>draising
            </div>
            <div>
              evolved
            </div>
          </div>
          <img alt="seedom" src={seedomLogo} />
        </div>
        <div className="interface">
          <Circles deployment={deployment} state={state} />
          <Ethereum isShown={component === 'ethereum'} />
          <Network isShown={component === 'network'} />
          <Account isShown={component === 'account'} />
          <Begin isShown={component === 'begin'} cause={cause} onPlay={onPlay} />
          <Welcome isShown={component === 'welcome'} deployment={deployment} cause={cause} onPlay={onPlay} onCountMeIn={this.handleCountMeIn} />
          <BeginningFailed isShown={component === 'beginningFailed'} cause={cause} />
          <Participate isShown={component === 'participate'} deployment={deployment} cause={cause} isLoading={isLoading} onParticipate={this.handleParticipate} onPlay={onPlay} />
          <Badge isShown={component === 'badge'} primaryContractAddresses={primaryContractAddresses} network={network} account={account} participant={participant} onBadgingOver={this.handleBadgingOver} />
          <Participation isShown={component === 'participation'} participant={participant} cause={cause} onRaising={this.handleRaising} onBadging={this.handleBadging} onPlay={onPlay} />
          <ParticipationFailed isShown={component === 'participationFailed'} cause={cause} />
          <Raise isShown={component === 'raise'} deployment={deployment} cause={cause} isLoading={isLoading} onRaise={this.handleRaise} onRaisingCancelled={this.handleRaisingCancelled} onPlay={onPlay} />
          <Reveal isShown={component === 'reveal'} />
          <End isShown={component === 'end'} cause={cause} />
          <Selection isShown={component === 'selection'} state={state} network={network} cause={cause} />
          <Withdraw isShown={component === 'withdraw'} balances={balances} isLoading={isLoading} onWithdraw={this.handleWithdraw} onWithdrawSkipped={this.handleWithdrawSkipped} />
          <Cancel isShown={component === 'cancel'} isLoading={isLoading} cause={cause} onCancel={this.handleCancel} />
          <Cancelled isShown={component === 'cancelled'} cause={cause} />
        </div>
        <Footer network={network} primaryContractAddresses={primaryContractAddresses} />
      </div>
    );
  }
}

export default Puck;
