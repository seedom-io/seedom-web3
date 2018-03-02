import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from '../field';

const MAX_LENGTH = 32;

class Message extends Component {
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
    this.random.focus();
  }

  validate = () => {
    const { value } = this.state;
    const isValid = (value.length > 0) && (value.length <= MAX_LENGTH);
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
        format="textblock"
        type="text"
        placeholder="your message&#10;to the world"
        value={value}
        maxLength={MAX_LENGTH}
        disabled={disabled}
        isValid={isValid}
        onChange={this.handleChange}
        ref={(component) => { this.random = component; }}
      />
    );
  }
}

export default Message;
