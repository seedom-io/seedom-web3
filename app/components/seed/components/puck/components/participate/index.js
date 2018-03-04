import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Content from '../content';
import Entries from '../entries';
import Message from '../message';
import Indicator from '../indicator';
import './index.scss';

class Participate extends Content {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isEntriesValid: true,
      isMessageValid: true,
      isFormValid: true
    };
  }

  show() {
    super.show();
    this.entries.focus();
  }

  validateForm = (done) => {
    const isEntriesValid = this.entries.validate();
    const isMessageValid = this.message.validate();
    this.setState({
      isEntriesValid,
      isMessageValid,
      isFormValid: isEntriesValid && isMessageValid
    }, done);
  }

  handleSubmit = () => {
    this.validateForm(() => {
      const { isFormValid } = this.state;
      if (isFormValid) {
        const { onParticipate } = this.props;
        const entries = this.entries.value();
        const message = this.message.value();
        onParticipate({ message, entries });
      } else {
        toast.error('There was a problem participating.', {
          position: toast.POSITION.TOP_CENTER
        });
      }
    });
  }

  render() {
    const { raiser, isLoading } = this.props;

    const {
      className,
    } = this.state;

    return (
      <div className={`seedom-content participate ${className}`}>
        <Indicator type={isLoading ? 'waiting' : null} />
        <div className="seedom-overlay layout">

          <div className="charity-logo small" />

          <Entries
            raiser={raiser}
            disabled={isLoading}
            ref={(component) => { this.entries = component; }}
          />

          <Message
            disabled={isLoading}
            ref={(component) => { this.message = component; }}
          />

          <div className="field">
            <div className="control">
              <a className="button is-dark" disabled={isLoading} onClick={this.handleSubmit}>PARTICIPATE</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Participate;
