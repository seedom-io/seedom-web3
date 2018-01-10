import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { setInterval, clearInterval } from 'timers';

const MAX_X = 1000;
const MAX_Y = 1000;
const FULL_RADIUS = 500;
const CENTER_X = 500;
const CENTER_Y = 500;
const LOADERS_STROKE_WIDTH = 30;
const PROGRESS_STROKE_WIDTH = 30;
const PHASE_STROKE_WIDTH = 50;
const BACKGROUND_PADDING = 50;
const LOADERS_PERCENTAGE = 10;

class SeedomCircles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      now: new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        now: new Date()
      })
    }, 1000);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isLoading: nextProps.isLoading
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getPhasePercentages() {
    const kickoffTime = this.props.raiser.kickoffTime;
    const revealTime = this.props.raiser.revealTime;
    const endTime = this.props.raiser.endTime;
    const raiserTime = endTime - kickoffTime;
    const participationTime = revealTime - kickoffTime;
    const revelationTime = endTime - revealTime;
    const progressTime = this.state.now - kickoffTime;

    return {
      participation: 100 * participationTime / raiserTime,
      revelation: 100 * revelationTime / raiserTime,
      progress: 100 * progressTime / raiserTime
    }
  }

  getProgressText() {
    const revealTime = this.props.raiser.revealTime;
    const endTime = this.props.raiser.endTime;
    const timeUntilReveal = revealTime - this.state.now;
    const timeUntilEnd = endTime - this.state.now;

    let timeUntilNextPhase;
    let phaseName;
    if (timeUntilReveal >= 0) {
      timeUntilNextPhase = timeUntilReveal;
      phaseName = "REVEAL";
    } else if (timeUntilEnd >= 0) {
      timeUntilNextPhase = timeUntilEnd;
      phaseName = "END";
    }

    timeUntilNextPhase /= 1000;
    // calculate (and subtract) whole days
    const days = Math.floor(timeUntilNextPhase / 86400);
    timeUntilNextPhase -= days * 86400;
    // calculate (and subtract) whole hours
    const hours = Math.floor(timeUntilNextPhase / 3600) % 24;
    timeUntilNextPhase -= hours * 3600;
    // calculate (and subtract) whole minutes
    const minutes = Math.floor(timeUntilNextPhase / 60) % 60;
    timeUntilNextPhase -= minutes * 60;
    // what's left is seconds
    const seconds = Math.floor(timeUntilNextPhase % 60);  // in theory the modulus is not required

    return `${phaseName} IN (${days}D : ${hours}H : ${minutes}M : ${seconds}S)`;

  }

  getProgressRadius() {
    return FULL_RADIUS - (PROGRESS_STROKE_WIDTH / 2) - BACKGROUND_PADDING;
  }

  getLoadersRadius() {
    return FULL_RADIUS - (LOADERS_STROKE_WIDTH / 2);
  }

  getPhasesRadius() {
    return FULL_RADIUS - (PHASE_STROKE_WIDTH / 2);
  }

  getPathFlipped(percentage) {
    return (percentage > 25 && percentage < 75) ? true : false;
  }

  getPathStyle(radius, percentage, offset) {
    const diameter = Math.PI * 2 * radius;
    const dashoffset = ((100 - percentage) / 100) * diameter;
    const rotation = 360 * offset / 100;

    return {
      strokeDasharray: `${diameter}px ${diameter}px`,
      strokeDashoffset: `${dashoffset}px`,
      transform: `rotate(${rotation}deg)`
    };
  }

  getPathDescription(radius, flipped) {
    // Move to center of canvas
    // Relative move to top canvas
    // Relative arc to bottom of canvas
    // Relative arc to top of canvas
    return `
        M ${CENTER_X},${CENTER_Y}
        m 0,-${radius}
        a ${radius},${radius} 0 1 ${flipped ? 0 : 1} 0,${2 * radius}
        a ${radius},${radius} 0 1 ${flipped ? 0 : 1} 0,-${2 * radius}
    `;
  }

  render() {

    const progressRadius = this.getProgressRadius();
    const loadersRadius = this.getLoadersRadius();

    const phasePercentages = this.getPhasePercentages();

    const progressPathStyle = this.getPathStyle(progressRadius, phasePercentages.progress);
    const participationPathStyle = this.getPathStyle(progressRadius, phasePercentages.participation);
    const revelationPathStyle = this.getPathStyle(progressRadius, phasePercentages.revelation, phasePercentages.participation);
    const loadersPathStyle = this.getPathStyle(loadersRadius, LOADERS_PERCENTAGE);

    const progressPathFlipped = this.getPathFlipped(phasePercentages.progress);
    const participationPathFlipped = this.getPathFlipped(phasePercentages.participation);

    const progressPathDescription = this.getPathDescription(progressRadius);
    const flippedProgressPathDescription = this.getPathDescription(progressRadius, participationPathFlipped);
    const loadersPathDescription = this.getPathDescription(loadersRadius);

    const progressText = this.getProgressText();

    return (
      <svg
        className='seedom-circles'
        viewBox={`0 0 ${MAX_X} ${MAX_Y}`}
      >

        <circle
          className='background'
          cx={CENTER_X}
          cy={CENTER_Y}
          r={FULL_RADIUS}
        />

        <g className={`loaders-container ${this.state.isLoading ? 'show' : 'hide'}`}>

          <circle
            className={`loaders-arc`}
            cx={CENTER_X}
            cy={CENTER_Y}
            r={loadersRadius}
            strokeWidth={LOADERS_STROKE_WIDTH}
            fillOpacity={0}
            style={loadersPathStyle}
          />

          <circle
            className={`loaders-arc bottom`}
            cx={CENTER_X}
            cy={CENTER_Y}
            r={loadersRadius}
            strokeWidth={LOADERS_STROKE_WIDTH}
            fillOpacity={0}
            style={loadersPathStyle}
          />

          <path
            id="seedom-circles-loaders-path"
            className="loaders-path"
            d={loadersPathDescription}
            strokeWidth={0}
            fillOpacity={0}
          />

          <text>
            <textPath className="loaders-text" xlinkHref='#seedom-circles-loaders-path' startOffset="5%">
              BLOCKCHAINING
            </textPath>
            <textPath className="loaders-text" xlinkHref='#seedom-circles-loaders-path' startOffset="55%">
              BLOCKCHAINING
            </textPath>
          </text>

        </g>

        <g className="phase-container">

          <path
            id="seedom-circles-progress-path"
            className="phase-path"
            d={progressPathDescription}
            strokeWidth={0}
            fillOpacity={0}
          />

          <path
            id="seedom-circles-progress-path-flipped"
            className="phase-path"
            d={flippedProgressPathDescription}
            strokeWidth={0}
            fillOpacity={0}
          />

          <g className="phase participation">

            <circle
              cx={CENTER_X}
              cy={CENTER_Y}
              r={progressRadius}
              strokeWidth={PHASE_STROKE_WIDTH}
              fillOpacity={0}
              style={participationPathStyle}
            />

            <text>
              <textPath className={`phase-text ${participationPathFlipped ? "flipped" : null}`} xlinkHref={`${participationPathFlipped ? "#seedom-circles-progress-path-flipped" : "#seedom-circles-progress-path"}`} startOffset={`${participationPathFlipped ? phasePercentages.revelation + 1 : phasePercentages.participation - 1}%`}>
                PARTICIPATION PHASE
              </textPath>
            </text>

          </g>

          <g className="phase revelation">

            <circle
              cx={CENTER_X}
              cy={CENTER_Y}
              r={progressRadius}
              strokeWidth={PHASE_STROKE_WIDTH}
              fillOpacity={0}
              style={revelationPathStyle}
            />

            <text>
              <textPath className="phase-text" xlinkHref="#seedom-circles-progress-path" startOffset="99%">
                REVELATION PHASE
              </textPath>
            </text>

          </g>

          <g className="phase progress">
            <circle
              cx={CENTER_X}
              cy={CENTER_Y}
              r={progressRadius}
              strokeWidth={PROGRESS_STROKE_WIDTH}
              fillOpacity={0}
              style={progressPathStyle}
            />

            <text>
              <textPath className={`phase-text ${participationPathFlipped ? "flipped" : null}`} xlinkHref={`${phasePercentages.progress > 30 ? "#seedom-circles-progress-path-flipped" : "#seedom-circles-progress-path"}`} startOffset={`${phasePercentages.progress > 30 ? 101 - phasePercentages.progress : 1}%`}>
                {progressText}
              </textPath>
            </text>

          </g>

        </g>

      </svg>
    );
  }
}

SeedomCircles.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default SeedomCircles;
