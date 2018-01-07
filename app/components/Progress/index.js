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

class Progress extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      percentage: props.initialAnimation ? 0 : props.percentage,
    };
  }

  componentDidMount() {
    if (this.props.initialAnimation) {
      this.initialTimeout = setTimeout(() => {
        this.requestAnimationFrame = window.requestAnimationFrame(() => {
          this.setState({
            percentage: this.props.percentage,
          });
        });
      }, 0);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      percentage: nextProps.percentage,
    });
  }

  componentWillUnmount() {
    clearTimeout(this.initialTimeout);
    window.cancelAnimationFrame(this.requestAnimationFrame);
  }

  getPathDescription() {
    const radius = this.getPathRadius();
    const rotation = this.props.counterClockwise ? 1 : 0;

    // Move to center of canvas
    // Relative move to top canvas
    // Relative arc to bottom of canvas
    // Relative arc to top of canvas
    return `
      M ${CENTER_X},${CENTER_Y}
      m 0,-${radius}
      a ${radius},${radius} ${rotation} 1 1 0,${2 * radius}
      a ${radius},${radius} ${rotation} 1 1 0,-${2 * radius}
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
    return FULL_RADIUS - (this.props.strokeWidth / 2) - this.props.backgroundPadding;
  }

  render() {
    const { percentage, className, classes, strokeWidth } = this.props;
    const classForPercentage = this.props.classForPercentage ? this.props.classForPercentage(percentage) : '';
    const pathDescription = this.getPathDescription();

    return (
      <svg
        className={`${classes.root} ${className} ${classForPercentage}`}
        viewBox={`0 0 ${MAX_X} ${MAX_Y}`}
      >
        <circle
          className={classes.background}
          cx={CENTER_X}
          cy={CENTER_Y}
          r={FULL_RADIUS}
        />

        <path
          className={classes.trail}
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
        />

        <path
          className={classes.path}
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
          style={this.getProgressStyle()}
        />

      </svg>
    );
  }
}

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
  className: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string),
  strokeWidth: PropTypes.number,
  background: PropTypes.bool,
  backgroundPadding: PropTypes.number,
  initialAnimation: PropTypes.bool,
  counterClockwise: PropTypes.bool,
  classForPercentage: PropTypes.func,
};

Progress.defaultProps = {
  strokeWidth: 8,
  className: '',
  classes: {
    root: 'CircularProgressbar',
    trail: 'CircularProgressbar-trail',
    path: 'CircularProgressbar-path',
    background: 'CircularProgressbar-background',
  },
  background: false,
  backgroundPadding: null,
  initialAnimation: false,
  counterClockwise: false,
  classForPercentage: null
};

export default Progress;
