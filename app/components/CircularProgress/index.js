import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const MIN_PERCENTAGE = 0;
const MAX_PERCENTAGE = 100;
const MAX_X = 1000;
const MAX_Y = 1000;
const FULL_RADIUS = 500;
const CENTER_X = 500;
const CENTER_Y = 500;
const STROKE_WIDTH = 30;
const BACKGROUND_PADDING = 40;
const LOADING_PERCENTAGE = 10;

class CircularProgress extends React.Component {

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
    return FULL_RADIUS - (STROKE_WIDTH / 2) - BACKGROUND_PADDING;
  }

  getLoadingRadius() {
    return FULL_RADIUS - (STROKE_WIDTH / 2);
  }

  getTopPathDescription(radius) {
    // Move to center of canvas
    // Relative move to top canvas
    // Relative arc to bottom of canvas
    // Relative arc to top of canvas
    return `
      M ${CENTER_X},${CENTER_Y}
      m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;
  }

  getBottomPathDescription(radius) {
    // Move to center of canvas
    // Relative move to top canvas
    // Relative arc to bottom of canvas
    // Relative arc to top of canvas
    return `
      M ${CENTER_X},${CENTER_Y}
      m 0,${radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
    `;
  }

  getPathStyle(radius, percentage) {
    const diameter = Math.PI * 2 * radius;
    const truncatedPercentage = Math.min(Math.max(percentage, MIN_PERCENTAGE), MAX_PERCENTAGE);
    const dashoffset = ((100 - truncatedPercentage) / 100) * diameter;
    return {
      strokeDasharray: `${diameter}px ${diameter}px`,
      strokeDashoffset: `${dashoffset}px`
    };
  }

  getLoaderPathRadius() {
    return FULL_RADIUS - (STROKE_WIDTH / 2);
  }

  render() {
    const progressRadius = this.getProgressRadius();
    const loadingRadius = this.getLoadingRadius();
    const progressDescription = this.getTopPathDescription(progressRadius);
    const topLoadingDescription = this.getTopPathDescription(loadingRadius);
    const bottomLoadingDescription = this.getBottomPathDescription(loadingRadius);
    const progressStyle = this.getPathStyle(progressRadius, this.state.percentage);
    const loadingStyle = this.getPathStyle(loadingRadius, LOADING_PERCENTAGE);

    return (
      <svg
        className='circular-progress'
        viewBox={`0 0 ${MAX_X} ${MAX_Y}`}
      >

        <circle
          className='background'
          cx={CENTER_X}
          cy={CENTER_Y}
          r={FULL_RADIUS}
        />

        <path
          id="circular-progress-trail"
          className='trail'
          d={progressDescription}
          strokeWidth={STROKE_WIDTH}
          fillOpacity={0}
        />

        <path
          className='progress'
          d={progressDescription}
          strokeWidth={STROKE_WIDTH}
          fillOpacity={0}
          style={progressStyle}
        />

        <path
          id="circular-progress-loading-top"
          className={`loading ${this.state.isLoading ? 'show' : 'hide'}`}
          d={topLoadingDescription}
          strokeWidth={STROKE_WIDTH}
          fillOpacity={0}
          style={loadingStyle}
        />

        <path
          id="circular-progress-loading-bottom"
          className={`loading ${this.state.isLoading ? 'show' : 'hide'}`}
          d={bottomLoadingDescription}
          strokeWidth={STROKE_WIDTH}
          fillOpacity={0}
          style={loadingStyle}
        />

        <text>
          <textPath className="trail-text" xlinkHref='#circular-progress-trail' startOffset="30%">
            PARTICIPATION
          </textPath>
          <textPath className="trail-text" xlinkHref='#circular-progress-trail' startOffset="80%">
            REVELATION
          </textPath>
          <textPath className="trail-text" xlinkHref='#circular-progress-trail' startOffset="90%">
            END
          </textPath>
          <textPath className={`loading-text ${this.state.isLoading ? 'show' : 'hide'}`} xlinkHref='#circular-progress-loading-top' startOffset="5%">
            BLOCKCHAINING
          </textPath>
          <textPath className={`loading-text ${this.state.isLoading ? 'show' : 'hide'}`} xlinkHref='#circular-progress-loading-bottom' startOffset="5%">
            BLOCKCHAINING
          </textPath>
        </text>

      </svg>
    );
  }
}

CircularProgress.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default CircularProgress;
