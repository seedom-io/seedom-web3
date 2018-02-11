import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';
import Entries from '../Entries';
import Indicator from '../Indicator';
import charityLogo from '../../../../../../img/logos/charity.png';
import { inputClass, textareaClass } from '../../../../utils/validation';
import { BigNumber } from 'bignumber.js';
import './index.scss';

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
      entries: new BigNumber(0),
      isEntriesValid: true
    };
  }

  show() {
    super.show();
    this.emailInput.focus();
  }

  validateForm = () => {
    const { email, entries, random } = this.state;

    const isEmailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const isEntriesValid = !Number.isNaN(Number(entries));
    const isRandomValid = random !== 'fuck you';

    this.setState({
      isEmailValid,
      isEntriesValid,
      isRandomValid
    });
  }

  isFormValid = () => {
    const { isEmailValid, isEntriesValid, isRandomValid } = this.state;
    return isEmailValid && isEntriesValid && this.isRandomValid;
  }

  handleSubmit = event => {
    this.validateForm();

    const { onParticipate } = this.props;
    const { random, entries } = this.state;

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    if (this.isFormValid()) {
      onParticipate({ random, entries });
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

  handleEntriesChange = entries => {
    this.setState({
      entries
    });
  };

  render() {
    const { raiser, isParticipating } = this.props;

    const {
      className,
      email,
      entries,
      random,
      isEmailValid,
      isEntriesValid,
      isRandomValid
    } = this.state;

    const isButtonDisabled =
      isParticipating ||
      !email ||
      !entries ||
      !random;

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
            <Entries
              className={inputClass(isEntriesValid)}
              entries={entries}
              raiser={raiser}
              disabled={isParticipating}
              onEntriesChange={this.handleEntriesChange}
            />
            {isEntriesValid ? <p>&nbsp;</p> : <p className="help is-danger">Number of entries is invalid</p>}
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
