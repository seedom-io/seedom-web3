import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Entries from '../entries';
import Message from '../message';
import Indicator from '../indicator';
import { toastr } from 'react-redux-toastr';
import './index.scss';

class Participate extends Content {
  static propTypes = {
    isLoading: PropTypes.bool
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
    this.setState({
      isFormValid: isEntriesValid && isMessageValid
    }, done);
  }

  handleSubmit = () => {
    this.validateForm(() => {
      if (this.state.isFormValid) {
        const entries = this.entries.value();
        const message = this.message.value();
        this.props.onParticipate({ message, entries });
      } else {
        toastr.warning('PARTICIPATE', 'form invalid');
      }
    });
  }

  render() {
    const { deployment, isLoading } = this.props;
    const { className } = this.state;
    return (
      <div className={`seedom-content participate ${className}`}>
        <Indicator type={isLoading ? 'waiting' : null} />
        <div className="seedom-overlay layout">

          <div className="cause-logo small" />

          <Entries
            deployment={deployment}
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
