import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from '../Field';
import { localeDecimal, getEtherFromWei } from '../../../../utils/numbers';
import { BigNumber } from 'bignumber.js';

class Entries extends Component {
  static propTypes = {
    raiser: PropTypes.shape().isRequired,
    disabled: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      value: new BigNumber(0),
      isValid: true
    };
  }

  focus = () => {
    this.field.focus();
  }

  validate = () => {
    const { value } = this.state;
    const isValid = value.isGreaterThanOrEqualTo(1) && (value.decimalPlaces() === 0);
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
      parsedValue = new BigNumber(0);
    }

    this.setState({ value: parsedValue });
  };

  render() {
    const { raiser, disabled } = this.props;
    const { value, isValid } = this.state;

    const wei = value.times(raiser.valuePerEntry);

    return (
      <Field
        format="addonbox"
        type="number"
        placeholder="entries"
        addon={`${localeDecimal(getEtherFromWei(wei))}Ξ`}
        disabled={disabled}
        isValid={isValid}
        onChange={this.handleChange}
        ref={(component) => { this.field = component; }}
      />
    );
  }
}

export default Entries;
