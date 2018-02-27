import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const MAX_X = 1000;
const MAX_Y = 1000;
const FULL_RADIUS = 500;
const CENTER_X = 500;
const CENTER_Y = 500;
const LOADERS_STROKE_WIDTH = 30;
const PROGRESS_STROKE_WIDTH = 30;
const PHASE_STROKE_WIDTH = 50;
const BACKGROUND_PADDING = 50;
const LOADERS_PERCENTAGE = 20;
const LOADERS_TEXT = 'COMMUNICATING WITH ETHEREUM';

const getPhasePercentages = (raiser, now) => {
  if (!raiser) {
    return {
      participation: 0,
      revelation: 0,
      progress: 0
    };
  }

  const { deployTime, revealTime, endTime } = raiser;
  const raiserTime = endTime - deployTime;
  const participationTime = revealTime - deployTime;
  const revelationTime = endTime - revealTime;
  const progressTime = now - deployTime;

  return {
    participation: 100 * (participationTime / raiserTime),
    revelation: 100 * (revelationTime / raiserTime),
    progress: progressTime > raiserTime ? 100 : 100 * (progressTime / raiserTime)
  };
};

const getProgressText = (raiser, now) => {
  if (!raiser) {
    return null;
  }

  const { revealTime, endTime } = raiser;
  const timeUntilReveal = revealTime - now;
  const timeUntilEnd = endTime - now;

  if (timeUntilEnd <= 0) {
    return 'FINISHED';
  }

  let timeUntilNextPhase;
  let phaseName;
  if (timeUntilReveal >= 0) {
    timeUntilNextPhase = timeUntilReveal;
    phaseName = 'REVEAL';
  } else if (timeUntilEnd >= 0) {
    timeUntilNextPhase = timeUntilEnd;
    phaseName = 'END';
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
  const seconds = Math.floor(timeUntilNextPhase % 60);

  return `${phaseName} IN - ${days}D ${hours}H ${minutes}M ${seconds}S`;
};

const getProgressRadius = () => {
  return FULL_RADIUS - (PROGRESS_STROKE_WIDTH / 2) - BACKGROUND_PADDING;
};

const getLoadersRadius = () => {
  return FULL_RADIUS - (LOADERS_STROKE_WIDTH / 2);
};

const getPhasesRadius = () => {
  return FULL_RADIUS - (PHASE_STROKE_WIDTH / 2);
};

const getPathFlipped = (percentage) => {
  return percentage > 30 && percentage < 70;
};

const getPathStyle = (radius, percentage, offset) => {
  const diameter = Math.PI * 2 * radius;
  const dashoffset = ((100 - percentage) / 100) * diameter;
  const rotation = 360 * (offset / 100);

  return {
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${dashoffset}px`,
    transform: `rotate(${rotation}deg)`
  };
};

const getTextOffset = (flipped, percentage) => {
  return flipped ? 101 - percentage : percentage - 1;
};

const getPathDescription = (radius, flipped) => {
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
};

const getProgressTextShown = (percentage) => {
  return percentage >= 15;
};

class Circles extends React.Component {
  static propTypes = {
    raiser: PropTypes.shape(),
    isLoading: PropTypes.bool.isRequired
  };

  static defaultProps = {
    raiser: null
  }

  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const { raiser, isLoading } = this.props;
    const { now } = this.state;

    const phasePercentages = getPhasePercentages(raiser, now);
    const progressText = getProgressText(raiser, now);

    const progressRadius = getProgressRadius();
    const loadersRadius = getLoadersRadius();

    const progressPathStyle = getPathStyle(progressRadius, phasePercentages.progress);
    const participationPathStyle = getPathStyle(progressRadius, phasePercentages.participation);
    const revelationPathStyle = getPathStyle(progressRadius, phasePercentages.revelation, phasePercentages.participation);
    const loadersPathStyle = getPathStyle(loadersRadius, LOADERS_PERCENTAGE);

    const progressPathFlipped = getPathFlipped(phasePercentages.progress);
    const participationPathFlipped = getPathFlipped(phasePercentages.participation);

    const progressPathDescription = getPathDescription(progressRadius);
    const flippedProgressPathDescription = getPathDescription(progressRadius, true);
    const loadersPathDescription = getPathDescription(loadersRadius);

    const progressTextShown = getProgressTextShown(phasePercentages.progress);

    const participationTextOffset = getTextOffset(participationPathFlipped, phasePercentages.participation);
    const progressTextOffset = getTextOffset(progressPathFlipped, phasePercentages.progress);

    return (
      <svg
        className="seedom-circles"
        viewBox={`0 0 ${MAX_X} ${MAX_Y}`}
      >

        <circle
          className="background"
          cx={CENTER_X}
          cy={CENTER_Y}
          r={FULL_RADIUS}
        />

        <g className={`loaders-container ${isLoading ? 'show' : 'hide'}`}>

          <circle
            className="loaders-arc"
            cx={CENTER_X}
            cy={CENTER_Y}
            r={loadersRadius}
            strokeWidth={LOADERS_STROKE_WIDTH}
            fillOpacity={0}
            style={loadersPathStyle}
          />

          <circle
            className="loaders-arc bottom"
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
            <textPath className="loaders-text" xlinkHref="#seedom-circles-loaders-path" startOffset={`${LOADERS_PERCENTAGE / 2}%`}>
              {LOADERS_TEXT}
            </textPath>
          </text>

          <text>
            <textPath className="loaders-text" xlinkHref="#seedom-circles-loaders-path" startOffset={`${(LOADERS_PERCENTAGE / 2) + 50}%`}>
              {LOADERS_TEXT}
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
              <textPath className={`phase-text ${participationPathFlipped ? "flipped" : null}`} xlinkHref={`${participationPathFlipped ? "#seedom-circles-progress-path-flipped" : "#seedom-circles-progress-path"}`} startOffset={`${participationTextOffset}%`}>
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

            {progressTextShown &&
              <text>
                <textPath className={`phase-text ${progressPathFlipped ? "flipped" : null}`} xlinkHref={`${progressPathFlipped ? "#seedom-circles-progress-path-flipped" : "#seedom-circles-progress-path"}`} startOffset={`${progressTextOffset}%`}>
                  {progressText}
                </textPath>
              </text>
            }

          </g>

        </g>

      </svg>
    );
  }
}

export default Circles;
