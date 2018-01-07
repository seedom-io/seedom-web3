import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const MIN_PERCENTAGE = 0;
const MAX_PERCENTAGE = 100;
const MAX_X = 100;
const MAX_Y = 100;
const FULL_RADIUS = 50;
const CENTER_X = 50;
const CENTER_Y = 50;
const STROKE_WIDTH = 3;
const BACKGROUND_PADDING = 3;

class CircularProgress extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({
          percentage: this.props.percentage,
        });
    }, 0);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      percentage: nextProps.percentage,
    });
  }

  componentWillUnmount() {
  }

  getPathDescription() {
    const radius = this.getPathRadius();

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

  getProgressStyle() {
    const diameter = Math.PI * 2 * this.getPathRadius();
    const truncatedPercentage = Math.min(Math.max(this.state.percentage, MIN_PERCENTAGE), MAX_PERCENTAGE);
    const dashoffset = ((100 - truncatedPercentage) / 100) * diameter;

    return {
      strokeDasharray: `${diameter}px ${diameter}px`,
      strokeDashoffset: `${this.props.counterClockwise ? -dashoffset : dashoffset}px`,
    };
  }

  getPathRadius() {
    // the radius of the path is defined to be in the middle, so in order for the path to
    // fit perfectly inside the 100x100 viewBox, need to subtract half the strokeWidth
    return FULL_RADIUS - (STROKE_WIDTH / 2) - BACKGROUND_PADDING;
  }

  render() {
    const pathDescription = this.getPathDescription();

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
          className='trail'
          d={pathDescription}
          strokeWidth={STROKE_WIDTH}
          fillOpacity={0}
        />

        <path
          className='path'
          d={pathDescription}
          strokeWidth={STROKE_WIDTH}
          fillOpacity={0}
          style={this.getProgressStyle()}
        />

      </svg>
    );
  }
}

CircularProgress.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default CircularProgress;
