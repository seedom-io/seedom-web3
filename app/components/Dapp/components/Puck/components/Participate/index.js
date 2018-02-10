import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';
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
      random: '',
      numOfEntries: 0
    };
  }

  show() {
    super.show();
    this.emailInput.focus();
  }

  handleSubmit = event => {
    const { onParticipate } = this.props;
    const { random, numOfEntries } = this.state;

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    onParticipate({ random, numOfEntries });
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
    const { className } = this.state;
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
          <input className="input is-primary" type="text" placeholder="EMAIL ADDRESS" disabled={isParticipating} onChange={this.handleEmailChange} ref={(input) => { this.emailInput = input; }} />
          <input className="input is-primary" type="number" placeholder="NUMBER OF ENTRIES" disabled={isParticipating} onChange={this.handleNumOfEntriesChange} />
          <textarea rows="3" className="textarea is-primary" type="text" placeholder="TYPE A MESSAGE HERE" disabled={isParticipating} onChange={this.handleRandomChange} />
          <a className="button is-primary is-outlined" disabled={isButtonDisabled} onClick={this.handleSubmit}>PARTICIPATE</a>
        </div>
      </div>
    );
  }
}

export default Participate;
