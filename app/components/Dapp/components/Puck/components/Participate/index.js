import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Content from '../Content';
import Indicator from '../Indicator';
import charityLogo from '../../../../../../img/logos/charity.png';
import './index.scss';

function inputClass(isValid) {
  return classNames({
    input: true,
    'is-primary': isValid,
    'is-danger': !isValid
  });
}

function textareaClass(isValid) {
  return classNames({
    textarea: true,
    'is-primary': isValid,
    'is-danger': !isValid
  });
}

class Participate extends Content {
  static propTypes = {
    isParticipating: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isEmailValid: true,
      random: '',
      isRandomValid: true,
      numOfEntries: 0,
      isNumOfEntriesValid: true
    };
  }

  show() {
    super.show();
    this.emailInput.focus();
  }

  validateForm = () => {
    const isEmailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const isNumOfEntriesValid = !Number.isNaN(Number(this.state.numOfEntries));
    const isRandomValid = this.state.random !== 'fuck you';

    this.setState({
      isEmailValid,
      isNumOfEntriesValid,
      isRandomValid
    });
  }

  isFormValid = () => {
    return this.state.isEmailValid && this.state.isNumOfEntriesValid && this.isRandomValid;
  }

  handleSubmit = event => {
    this.validateForm();

    const { onParticipate } = this.props;
    const { random, numOfEntries } = this.state;

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    if (this.isFormValid()) {
      onParticipate({ random, numOfEntries });
    } else {
      console.log('nope');
    }
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleRandomChange = event => {
    this.setState({
      random: event.target.value
    });
  };

  handleNumOfEntriesChange = event => {
    this.setState({
      numOfEntries: event.target.value
    });
  };

  render() {
    const {
      className,
      isEmailValid,
      isNumOfEntriesValid,
      isRandomValid
    } = this.state;
    const { isParticipating } = this.props;

    const isButtonDisabled =
      isParticipating ||
      !this.state.email ||
      !this.state.numOfEntries ||
      !this.state.random;

    return (
      <div className={`seedom-content participate ${className}`}>
        <Indicator type={isParticipating ? 'waiting' : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />

          <div className="field">
            <div className="control">
              <input
                className={inputClass(isEmailValid)}
                type="text"
                placeholder="EMAIL ADDRESS"
                disabled={isParticipating}
                onChange={this.handleEmailChange}
                ref={(input) => { this.emailInput = input; }}
              />
            </div>
            {isEmailValid ? <p>&nbsp;</p> : <p className="help is-danger">This email is invalid</p>}
          </div>

          <div className="field">
            <div className="control">
              <input
                className={inputClass(isNumOfEntriesValid)}
                type="number"
                placeholder="NUMBER OF ENTRIES"
                disabled={isParticipating}
                onChange={this.handleNumOfEntriesChange}
              />
            </div>
            {isNumOfEntriesValid ? <p>&nbsp;</p> : <p className="help is-danger">Number of entries is invalid</p>}
          </div>

          <div className="field">
            <div className="control">
              <textarea
                rows="3"
                className={textareaClass(isRandomValid)}
                type="text"
                placeholder="TYPE A MESSAGE HERE"
                disabled={isParticipating}
                onChange={this.handleRandomChange}
              />
            </div>
            {isRandomValid ? <p>&nbsp;</p> : <p className="help is-danger">Random is invalid</p>}
          </div>

          <div className="field">
            <div className="control">
              <a className="button is-primary is-outlined" disabled={isButtonDisabled} onClick={this.handleSubmit}>PARTICIPATE</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Participate;
