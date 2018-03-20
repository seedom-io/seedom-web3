import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from '../../../../../field';
import { zero, localeDecimal, getEtherFromWei } from '../../../../../../utils/numbers';
import { BigNumber } from 'bignumber.js';

class Entries extends Component {
  static propTypes = {
    raiser: PropTypes.shape(),
    disabled: PropTypes.bool
  };

  static defaultProps = {
    raiser: null,
    disabled: false
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

    let etherForEntries;
    if (raiser) {
      const weiForEntries = value.times(raiser.valuePerEntry);
      etherForEntries = localeDecimal(getEtherFromWei(weiForEntries));
    }

    return (
      <Field
        format="addonbox"
        type="number"
        min={new BigNumber(1)}
        placeholder="entries"
        value={value.toString()}
        disabled={disabled}
        isValid={isValid}
        onChange={this.handleChange}
        ref={(component) => { this.field = component; }}
      >
        <span>
          {`${etherForEntries}`}
          <span className="ether is-dark">
            <i className="fas fa-bars" />
          </span>
        </span>
      </Field>
    );
  }
}

export default Entries;
