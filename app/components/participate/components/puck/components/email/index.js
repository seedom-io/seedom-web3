import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from '../../../../../field';

const emailRegex = /\S+@\S+\.\S+/;

class Email extends Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isValid: true
    };
  }

  focus = () => {
    this.email.focus();
  }

  validate = () => {
    const { value } = this.state;
    const isValid = (value === '') || emailRegex.test(value);
    this.setState({ isValid });
    return isValid;
  };

  value = () => {
    return this.state.value;
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { disabled } = this.props;
    const { value, isValid } = this.state;

    return (
      <Field
        format="textbox"
        type="text"
        placeholder="email (optional)"
        value={value}
        disabled={disabled}
        isValid={isValid}
        onChange={this.handleChange}
        ref={(component) => { this.email = component; }}
      />
    );
  }
}

export default Email;
