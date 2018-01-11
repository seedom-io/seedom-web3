import React, { Component } from "react";
import PropTypes from "prop-types";
import SeedomCircles from "../SeedomCircles";
import SeedomSeed from "../SeedomSeed";
import SeedomBegin from "../SeedomBegin";
import SeedomParticipate from "../SeedomParticipate";
import SeedomParticipated from "../SeedomParticipated";
import SeedomRaise from "../SeedomRaise";
import SeedomReveal from "../SeedomReveal";
import SeedomRevealed from "../SeedomRevealed";
import SeedomEnd from "../SeedomEnd";
import SeedomWin from "../SeedomWin";
import SeedomError from "../SeedomError";
import seedomLogo from '../../img/logos/seedom.svg';
import "./index.scss";

const PHASES = {
  BEGIN: "BEGIN",
  PARTICIPATION: "PARTICIPATION",
  REVEAL: "REVEAL",
  END: "END"
};

const getPhase = ({ charityHashedRandom, raiser, hasBegun, isRaising, participant, winner }) => {
  const now = Date.now();
  return "BEGIN";

  if (now > raiser.kickoffTime && now < raiser.revealTime) {
    if (!charityHashedRandom) {
      return "SEED";
    } else if (!participant) {
      if (!hasBegun) {
        return "BEGIN";
      } else {
        return "PARTICIPATE";
      }
    } else {
      if (!isRaising) {
        return "PARTICIPATED";
      } else {
        return "RAISE";
      }
    }
  } else if (now > raiser.revealTime && now < raiser.endTime) {
    if (!participant) {
      return "ERROR";
    } else {
      return "REVEAL";
    }
  } else {
    if (!winner) {
      return "END";
    } else {
      return "WIN";
    }
  }
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
    }),
    winner: PropTypes.string,
    winningParticipant: PropTypes.shape({
      random: PropTypes.string.isRequired
    })
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
          <img src={seedomLogo} />
        </div>
        <div className="utility">
          <SeedomCircles percentage={50} isLoading={isLoading} raiser={raiser} />
          <SeedomSeed isShown={phase === "SEED"} />
          <SeedomBegin isShown={phase === "BEGIN"} onBegin={this.handleBegin} />
          <SeedomParticipate isShown={phase === "PARTICIPATE"} setLoading={this.setLoading} onParticipate={this.handleParticipate} />
          <SeedomParticipated isShown={phase === "PARTICIPATED"} participant={participant} onGetMoreEntries={this.handleGetMoreEntries} />
          <SeedomRaise isShown={phase === "RAISE"} setLoading={this.setLoading} onRaise={this.handleRaise} />
          <SeedomReveal isShown={phase === "REVEAL"} setLoading={this.setLoading} onReveal={this.handleReveal} />
          <SeedomRevealed isShown={phase === "REVEALED"} />
          <SeedomEnd isShown={phase === "END"} />
          <SeedomWin isShown={phase === "WIN"} winner={winner} winningParticipant={winningParticipant} />
          <SeedomError isShown={phase === "ERROR"} error={!participant ? "participation" : null} />
        </div>
      </div>
    );
  }
}

export default SeedomPuck;
