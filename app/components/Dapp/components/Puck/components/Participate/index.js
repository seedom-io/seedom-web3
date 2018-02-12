import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import Content from '../Content';
import Entries from '../Entries';
import Random from '../Random';
import Field from '../Field';
import Indicator from '../Indicator';
import charityLogo from '../../../../../../img/logos/charity.png';
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
      isFormValid: true
    };
  }

  show() {
    super.show();
    this.email.focus();
  }

  validateForm = (done) => {
    const { email } = this.state;

    const isEmailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null;
    const isEntriesValid = this.entries.validate();

    const isRandomValid = this.random.validate();

    this.setState({
      isEmailValid,
      isEntriesValid,
      isRandomValid,
      isFormValid: isEmailValid && isEntriesValid && isRandomValid
    }, done);
  }

  handleSubmit = event => {
    this.validateForm(() => {
      const { isFormValid } = this.state;
      if (isFormValid) {
        const { onParticipate } = this.props;
        const entries = this.entries.value();
        const random = this.random.value();
        onParticipate({ random, entries });
      } else {
        toast.error('There was a problem submitting.', {
          position: toast.POSITION.TOP_CENTER
        });
      }
    });
  }

  handleEmailChange = email => {
    this.setState({ email });
  };

  handleRandomChange = random => {
    this.setState({ random });
  };

  render() {
    const { raiser, isParticipating } = this.props;

    const {
      className,
      email,
      isEmailValid
    } = this.state;

    return (
      <div className={`seedom-content participate ${className}`}>
        <ToastContainer />
        <Indicator type={isParticipating ? 'waiting' : null} />
        <div className="seedom-overlay">

          <img src={charityLogo} />

          <Field
            format="textbox"
            type="text"
            value={email}
            placeholder="email address"
            disabled={isParticipating}
            isValid={isEmailValid}
            onChange={this.handleEmailChange}
            ref={(component) => { this.email = component; }}
          />

          <Entries
            raiser={raiser}
            disabled={isParticipating}
            ref={(component) => { this.entries = component; }}
          />

          <Random
            disabled={isParticipating}
            ref={(component) => { this.random = component; }}
          />

          <div className="field">
            <div className="control">
              <a className="button is-primary is-outlined" disabled={isParticipating} onClick={this.handleSubmit}>PARTICIPATE</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Participate;
