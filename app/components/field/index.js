import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

const inputClass = (isValid) => {
  return classNames({
    input: true,
    'is-primary': isValid,
    'is-danger': !isValid
  });
};

const textareaClass = (isValid) => {
  return classNames({
    textarea: true,
    'is-primary': isValid,
    'is-danger': !isValid
  });
};

class Field extends Component {
  static propTypes = {
    format: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    maxLength: PropTypes.number,
    min: PropTypes.number,
    placeholder: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    isValid: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.element
  };

  static defaultProps = {
    value: '',
    maxLength: 0,
    min: null,
    isValid: true,
    children: null
  };

  focus = () => {
    this.input.focus();
  };

  handleChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    const {
      format,
      type,
      placeholder,
      disabled,
      value,
      maxLength,
      children,
      isValid,
      min
    } = this.props;

    return (
      <div className="seedom-field field">
        <div className={`control ${format}`}>
          {{
            textbox: (
              <input
                className={inputClass(isValid)}
                type={type}
                placeholder={placeholder.toUpperCase()}
                disabled={disabled}
                value={value}
                onChange={this.handleChange}
                ref={(input) => { this.input = input; }}
              />
            ),
            textblock: (
              <textarea
                rows="2"
                className={textareaClass(isValid)}
                type={type}
                placeholder={placeholder.toUpperCase()}
                disabled={disabled}
                value={value}
                maxLength={maxLength}
                onChange={this.handleChange}
                ref={(input) => { this.input = input; }}
              />
            ),
            addonbox: (
              <div>
                <input
                  className={inputClass(isValid)}
                  type={type}
                  min={min}
                  placeholder={placeholder.toUpperCase()}
                  disabled={disabled}
                  onChange={this.handleChange}
                  ref={(input) => { this.input = input; }}
                />
                <div className="addon">{children}</div>
              </div>
            ),
          }[format]}
        </div>
      </div>
    );
  }
}

export default Field;
