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
    addon: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    isValid: PropTypes.bool,
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    value: '',
    addon: '',
    isValid: true
  }

  focus = () => {
    this.input.focus();
  }

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
      addon,
      isValid
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
                rows="3"
                className={textareaClass(isValid)}
                type={type}
                placeholder={placeholder.toUpperCase()}
                disabled={disabled}
                value={value}
                onChange={this.handleChange}
                ref={(input) => { this.input = input; }}
              />
            ),
            addonbox: (
              <g>
                <input
                  className={inputClass(isValid)}
                  type={type}
                  placeholder={placeholder.toUpperCase()}
                  disabled={disabled}
                  onChange={this.handleChange}
                  ref={(input) => { this.input = input; }}
                />
                <div className="addon">{addon}</div>
              </g>
            ),
          }[format]}
        </div>
      </div>
    );
  }
}

export default Field;
