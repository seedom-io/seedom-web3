import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from '../../../field';
import { BigNumber } from 'bignumber.js';
import { zero } from '../../../../utils/numbers';
import './index.scss';

class Score extends Component {
  static propTypes = {
    value: PropTypes.shape(),
    disabled: PropTypes.bool.isRequired,
    maxScore: PropTypes.shape().isRequired
  };

  static defaultProps = {
    value: null
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value ? props.value : props.maxScore,
      isValid: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value && this.props.value && !this.props.value.isEqualTo(nextProps.value)) {
      this.setState({ value: nextProps.value });
    }
  }

  focus = () => {
    this.score.focus();
  }

  validate = () => {
    const { value } = this.state;
    const isValid =
      value.isGreaterThanOrEqualTo(1)
      && value.isLessThanOrEqualTo(this.props.maxScore);
    this.setState({ isValid });
    return isValid;
  };

  value = () => {
    return this.state.value;
  };

  handleChange = value => {
    let parsedValue;

    try {
      parsedValue = new BigNumber(value);
    } catch (error) {
      parsedValue = zero();
    }

    this.setState({ value: parsedValue });
  };

  render() {
    const { disabled, maxScore } = this.props;
    const { value, isValid } = this.state;

    return (
      <div className="seedom-score">

        <Field
          format="textbox"
          type="number"
          min={new BigNumber(1)}
          max={maxScore}
          value={value.toString()}
          maxLength={maxScore.toString().length}
          placeholder=""
          disabled={disabled}
          isValid={isValid}
          onChange={this.handleChange}
          ref={(component) => { this.score = component; }}
        />

        <div className="divider">/</div>

        <div className="score">{maxScore.toString()}</div>

      </div>
    );
  }
}

export default Score;
