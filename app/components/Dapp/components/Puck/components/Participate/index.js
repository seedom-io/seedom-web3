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
      random: '',
      isRandomValid: true,
      isFormValid: true
    };
  }

  show() {
    super.show();
    this.entries.focus();
  }

  validateForm = (done) => {
    const isEntriesValid = this.entries.validate();

    const isRandomValid = this.random.validate();

    this.setState({
      isEntriesValid,
      isRandomValid,
      isFormValid: isEntriesValid && isRandomValid
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

  handleRandomChange = random => {
    this.setState({ random });
  };

  render() {
    const { raiser, isParticipating } = this.props;

    const {
      className,
    } = this.state;

    return (
      <div className={`seedom-content participate ${className}`}>
        <ToastContainer />
        <Indicator type={isParticipating ? 'waiting' : null} />
        <div className="seedom-overlay">

          <img src={charityLogo} />

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
              <a className="button is-dark" disabled={isParticipating} onClick={this.handleSubmit}>PARTICIPATE</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Participate;
