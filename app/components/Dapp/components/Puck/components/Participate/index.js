import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';
import Entries from '../Entries';
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
      isRandomValid: true
    };
  }

  show() {
    super.show();
    this.email.focus();
  }

  validateForm = (done) => {
    const { email, random } = this.state;

    const isEmailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null;
    const isEntriesValid = this.entries.validate();
    const isRandomValid = random !== 'fuck you';

    this.setState({
      isEmailValid,
      isEntriesValid,
      isRandomValid
    }, done);
  }

  isFormValid = () => {
    const { isEmailValid, isEntriesValid, isRandomValid } = this.state;
    return isEmailValid && isEntriesValid && isRandomValid;
  }

  handleSubmit = event => {
    this.validateForm(() => {
      const { onParticipate } = this.props;
      const { random } = this.state;

      if (event !== undefined && event.preventDefault) {
        event.preventDefault();
      }

      if (this.isFormValid()) {
        const entries = this.entries.value();
        onParticipate({ random, entries });
      } else {
        console.log('nope');
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
      random,
      isEmailValid,
      isRandomValid
    } = this.state;

    return (
      <div className={`seedom-content participate ${className}`}>
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

          <Field
            format="textblock"
            type="text"
            value={random}
            placeholder="your message&#10;to the world"
            disabled={isParticipating}
            isValid={isRandomValid}
            onChange={this.handleRandomChange}
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
