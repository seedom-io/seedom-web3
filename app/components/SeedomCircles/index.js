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
const LOADERS_PERCENTAGE = 10;

class SeedomCircles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      percentage: 0,
      isLoading: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({
          percentage: this.props.percentage
        });
    }, 0);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      percentage: nextProps.percentage,
      isLoading: nextProps.isLoading
    });
  }

  componentWillUnmount() {
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

    const participationPercentage = 70;
    const revelationPercentage = 30;

    const progressPathStyle = this.getPathStyle(progressRadius, this.state.percentage);
    const participationPathStyle = this.getPathStyle(progressRadius, participationPercentage);
    const revelationPathStyle = this.getPathStyle(progressRadius, revelationPercentage, participationPercentage);
    const loadersPathStyle = this.getPathStyle(loadersRadius, LOADERS_PERCENTAGE);

    const progressPathFlipped = this.getPathFlipped(this.state.percentage);
    const participationPathFlipped = this.getPathFlipped(participationPercentage);

    const progressPathDescription = this.getPathDescription(progressRadius);
    const flippedProgressPathDescription = this.getPathDescription(progressRadius, participationPathFlipped);
    const loadersPathDescription = this.getPathDescription(loadersRadius);

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
              <textPath className={`phase-text ${participationPathFlipped ? "flipped" : null}`} xlinkHref={`${participationPathFlipped ? "#seedom-circles-progress-path-flipped" : "#seedom-circles-progress-path"}`} startOffset={`${participationPathFlipped ? revelationPercentage + 1 : participationPercentage - 1}%`}>
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
              <textPath className={`phase-text ${participationPathFlipped ? "flipped" : null}`} xlinkHref={`${this.state.percentage > 30 ? "#seedom-circles-progress-path-flipped" : "#seedom-circles-progress-path"}`} startOffset={`${this.state.percentage > 30 ? 101 - this.state.percentage : 1}%`}>
                REVEAL IN 2D 4H 10M
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
