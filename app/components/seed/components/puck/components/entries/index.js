import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from '../field';
import { zero, localeDecimal, getEtherFromWei } from '../../../../../../utils/numbers';
import { BigNumber } from 'bignumber.js';

class Entries extends Component {
  static propTypes = {
    raiser: PropTypes.shape().isRequired,
    disabled: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      value: zero(),
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
      parsedValue = zero();
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
        min={1}
        placeholder="entries"
        value={value.toString()}
        disabled={disabled}
        isValid={isValid}
        onChange={this.handleChange}
        ref={(component) => { this.field = component; }}
      >
        <span>
          {`${localeDecimal(getEtherFromWei(wei))}`}
          <span className="ether is-dark">Ξ</span>
        </span>
      </Field>
    );
  }
}

export default Entries;
