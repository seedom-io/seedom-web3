import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from '../../../field';
import { BigNumber } from 'bignumber.js';
import { zero } from '../../../../utils/numbers';

class Score extends Component {
  static propTypes = {
    value: PropTypes.shape(),
    disabled: PropTypes.bool.isRequired,
    maxScore: PropTypes.shape().isRequired
  };

  static defaultProps = {
    value: zero()
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      isValid: true
    };
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
          format="textblock"
          type="text"
          value={value.toString()}
          maxLength={maxScore.toString().length}
          placeholder=""
          disabled={disabled}
          isValid={isValid}
          onChange={this.handleChange}
          ref={(component) => { this.score = component; }}
        />
        /
        {maxScore.toString()}
      </div>
    );
  }
}

export default Score;
