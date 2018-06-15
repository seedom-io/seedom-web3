import React from 'react';
import PropTypes from 'prop-types';
import { localeDecimal, getEtherFromWei } from '../../../../../../utils/numbers';
import './index.scss';

const MAX_X = 1000;
const MAX_Y = 1000;
const FULL_RADIUS = 500;
const CENTER_X = 500;
const CENTER_Y = 500;
const ELAPSED_STROKE_WIDTH = 40;
const RAISED_STROKE_WIDTH = 40;

const getElapsedPercentage = (deployment, now) => {
  const { deployTime, endTime } = deployment;
  const deploymentTime = endTime - deployTime;
  const elapsedTime = now - deployTime;
  return elapsedTime > deploymentTime ? 100 : 100 * (elapsedTime / deploymentTime);
};

const getRaisedPercentage = (deployment, state) => {
  const { valuePerEntry, goal } = deployment;
  const { entries } = state;
  const raisedPercentage = valuePerEntry.times(entries).div(goal);
  return raisedPercentage.isGreaterThan(1) ? 100 : raisedPercentage.times(100).toNumber();
};

const getElapsedText = (deployment, now) => {
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

  return `ENDS IN - ${days}D ${hours}H ${minutes}M ${seconds}S`;
};

const getRaisedText = (deployment, state) => {
  const { valuePerEntry, goal } = deployment;
  const { entries } = state;
  const weiUntilGoal = goal.minus(valuePerEntry.times(entries));

  if (weiUntilGoal.isLessThanOrEqualTo(0)) {
    return `GOAL REACHED`;
  }

  const etherUntilGoal = getEtherFromWei(weiUntilGoal);
  const etherUntilGoalText = localeDecimal(etherUntilGoal, 3);
  return `GOAL IN - ${etherUntilGoalText}Ξ`;
};

const getElapsedRadius = () => {
  return FULL_RADIUS - (ELAPSED_STROKE_WIDTH / 2);
};

const getRaisedRadius = () => {
  return FULL_RADIUS - (RAISED_STROKE_WIDTH / 2) - ELAPSED_STROKE_WIDTH;
};

const getPathFlipped = (percentage) => {
  return percentage > 30 && percentage < 80;
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

const getTextShown = (percentage) => {
  return percentage >= 15;
};

class Circles extends React.Component {
  static propTypes = {
    deployment: PropTypes.shape(),
    state: PropTypes.shape()
  };

  static defaultProps = {
    deployment: null,
    state: null
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

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { deployment, state } = this.props;
    const { now } = this.state;

    let elapsedPercentage;
    let elapsedText;
    let raisedPercentage;
    let raisedText;
    if (deployment) {
      elapsedPercentage = getElapsedPercentage(deployment, now);
      elapsedText = getElapsedText(deployment, now);

      if (state) {
        raisedPercentage = getRaisedPercentage(deployment, state);
        raisedText = getRaisedText(deployment, state);
      }
    }

    const elapsedRadius = getElapsedRadius();
    const raisedRadius = getRaisedRadius();

    const elapsedPathStyle = getPathStyle(elapsedRadius, elapsedPercentage);
    const raisedPathStyle = getPathStyle(raisedRadius, raisedPercentage);

    const elapsedPathFlipped = getPathFlipped(elapsedPercentage);
    const raisedPathFlipped = getPathFlipped(raisedPercentage);

    const elapsedPathDescription = getPathDescription(elapsedRadius);
    const flippedElapsedPathDescription = getPathDescription(elapsedRadius, true);
    const raisedPathDescription = getPathDescription(raisedRadius);
    const flippedRaisedPathDescription = getPathDescription(raisedRadius, true);

    const elapsedTextShown = getTextShown(elapsedPercentage);
    const raisedTextShown = getTextShown(raisedPercentage);

    const elapsedTextOffset = getTextOffset(elapsedPathFlipped, elapsedPercentage);
    const raisedTextOffset = getTextOffset(raisedPathFlipped, raisedPercentage);

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
          opacity={0.8}
        />

        <g className="phase-container">

          <path
            id="seedom-circles-elapsed-path"
            className="phase-path"
            d={elapsedPathDescription}
            strokeWidth={0}
            fillOpacity={0}
          />

          <path
            id="seedom-circles-raised-path"
            className="phase-path"
            d={raisedPathDescription}
            strokeWidth={0}
            fillOpacity={0}
          />

          <path
            id="seedom-circles-elapsed-path-flipped"
            className="phase-path"
            d={flippedElapsedPathDescription}
            strokeWidth={0}
            fillOpacity={0}
          />

          <path
            id="seedom-circles-raised-path-flipped"
            className="phase-path"
            d={flippedRaisedPathDescription}
            strokeWidth={0}
            fillOpacity={0}
          />

          <g className="phase elapsed">
            <circle
              cx={CENTER_X}
              cy={CENTER_Y}
              r={elapsedRadius}
              strokeWidth={ELAPSED_STROKE_WIDTH}
              fillOpacity={0}
              style={elapsedPathStyle}
            />

            {elapsedTextShown &&
              <text>
                <textPath className={`phase-text ${elapsedPathFlipped ? "flipped" : null}`} xlinkHref={`${elapsedPathFlipped ? "#seedom-circles-elapsed-path-flipped" : "#seedom-circles-elapsed-path"}`} startOffset={`${elapsedTextOffset}%`}>
                  {elapsedText}
                </textPath>
              </text>
            }

          </g>

          <g className="phase raised">
            <circle
              cx={CENTER_X}
              cy={CENTER_Y}
              r={raisedRadius}
              strokeWidth={RAISED_STROKE_WIDTH}
              fillOpacity={0}
              style={raisedPathStyle}
            />

            {raisedTextShown &&
              <text>
                <textPath className={`phase-text ${raisedPathFlipped ? "flipped" : null}`} xlinkHref={`${raisedPathFlipped ? "#seedom-circles-raised-path-flipped" : "#seedom-circles-raised-path"}`} startOffset={`${raisedTextOffset}%`}>
                  {raisedText}
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
