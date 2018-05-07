import React from 'react';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';
import Content from '../content';
import Entries from '../entries';
import Message from '../message';
import Email from '../email';
import Indicator from '../indicator';
import CauseLogo from '../../../../../causeLogo';
import './index.scss';

class Participate extends Content {
  static propTypes = {
    isLoading: PropTypes.bool,
    deployment: PropTypes.shape(),
    cause: PropTypes.shape()
  };

  static defaultProps = {
    deployment: null,
    cause: null,
    isLoading: false
  };

  constructor(props) {
    super(props);
    this.state = {
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
    const isEmailValid = this.email.validate();
    this.setState({
      isFormValid: isEntriesValid && isMessageValid && isEmailValid
    }, done);
  }

  handleSubmit = () => {
    this.validateForm(() => {
      if (this.state.isFormValid) {
        const entries = this.entries.value();
        const message = this.message.value();
        const email = this.email.value();
        this.props.onParticipate({ message, entries, email });
      } else {
        toastr.warning('PARTICIPATE', 'form invalid');
      }
    });
  }

  handlePlay = () => {
    // always play, but mark played
    this.props.onPlay(true);
  }

  render() {
    const { deployment, cause, isLoading } = this.props;
    const { className } = this.state;
    return (
      <div className={`seedom-content participate ${className}`}>
        <Indicator type={isLoading ? 'waiting' : null} />
        <div className="seedom-overlay">

          <CauseLogo cause={cause} size="small" onClick={this.handlePlay} />

          <Entries
            deployment={deployment}
            disabled={isLoading}
            ref={(component) => { this.entries = component; }}
          />

          <Message
            disabled={isLoading}
            ref={(component) => { this.message = component; }}
          />

          <Email
            disabled={isLoading}
            ref={(component) => { this.email = component; }}
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
