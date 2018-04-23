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

const getProgressPercentage = (deployment, now) => {
  const { deployTime, endTime } = deployment;
  const deploymentTime = endTime - deployTime;
  const progressTime = now - deployTime;
  return progressTime > deploymentTime ? 100 : 100 * (progressTime / deploymentTime);
};

const getProgressText = (starter, deployment, now) => {
  const { endTime } = deployment;
  let timeUntilEnd = endTime - now;

  if (timeUntilEnd <= 0) {
    return 'FINISHED';
  }

  timeUntilEnd /= 1000;
  // calculate (and subtract) whole days
  const days = Math.floor(timeUntilEnd / 86400);
  timeUntilEnd -= days * 86400;
  // calculate (and subtract) whole hours
  const hours = Math.floor(timeUntilEnd / 3600) % 24;
  timeUntilEnd -= hours * 3600;
  // calculate (and subtract) whole minutes
  const minutes = Math.floor(timeUntilEnd / 60) % 60;
  timeUntilEnd -= minutes * 60;
  // what's left is seconds
  const seconds = Math.floor(timeUntilEnd % 60);

  return `${starter.toUpperCase()} IN - ${days}D ${hours}H ${minutes}M ${seconds}S`;
};

const getProgressRadius = () => {
  return FULL_RADIUS - (PROGRESS_STROKE_WIDTH / 2) - BACKGROUND_PADDING;
};

const getLoadersRadius = () => {
  return FULL_RADIUS - (LOADERS_STROKE_WIDTH / 2);
};

const getPathFlipped = (percentage) => {
  return percentage > 30 && percentage < 70;
};

const getPathStyle = (radius, percentage) => {
  const diameter = Math.PI * 2 * radius;
  const dashoffset = ((100 - percentage) / 100) * diameter;

  return {
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${dashoffset}px`
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
    starter: PropTypes.string,
    deployment: PropTypes.shape(),
    isLoading: PropTypes.bool
  };

  static defaultProps = {
    starter: 'ends',
    deployment: null,
    isLoading: false
  };

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
    const { starter, deployment, isLoading } = this.props;
    const { now } = this.state;

    let progressPercentage;
    let progressText;
    if (deployment) {
      progressPercentage = getProgressPercentage(deployment, now);
      progressText = getProgressText(starter, deployment, now);
    }

    const progressRadius = getProgressRadius();
    const loadersRadius = getLoadersRadius();

    const progressPathStyle = getPathStyle(progressRadius, progressPercentage);
    const participationPathStyle = getPathStyle(progressRadius, 100);
    const loadersPathStyle = getPathStyle(loadersRadius, LOADERS_PERCENTAGE);

    const progressPathFlipped = getPathFlipped(progressPercentage);

    const progressPathDescription = getPathDescription(progressRadius);
    const flippedProgressPathDescription = getPathDescription(progressRadius, true);
    const loadersPathDescription = getPathDescription(loadersRadius);

    const progressTextShown = getProgressTextShown(progressPercentage);

    const progressTextOffset = getTextOffset(progressPathFlipped, progressPercentage);

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
          opacity={0.9}
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
