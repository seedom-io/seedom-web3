import React from 'react';
import PropTypes from 'prop-types';
import SeedomContent from '../SeedomContent';
import SeedomIndicator from '../SeedomIndicator';
import charityLogo from '../../img/logos/charity.png';
import './index.scss';

class SeedomParticipate extends SeedomContent {
  static propTypes = {
    isParticipating: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
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

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    onParticipate({ random: this.state.random, numOfEntries: this.state.numOfEntries });
  }

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
    const { isParticipating } = this.props;

    return (
      <div className={`seedom-content participate ${this.state.className}`}>
        <SeedomIndicator type={isParticipating ? "waiting" : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
          <input className="input is-primary" type="text" placeholder="EMAIL ADDRESS" disabled={isParticipating} onChange={this.handleNumOfEntriesChange} ref={(input) => { this.emailInput = input; }} />
          <input className="input is-primary" type="number" placeholder="NUMBER OF ENTRIES" disabled={isParticipating} onChange={this.handleNumOfEntriesChange} />
          <textarea rows="3" className="textarea is-primary" type="text" placeholder="TYPE A MESSAGE HERE" disabled={isParticipating} onChange={this.handleRandomChange} />
          <a className="button is-primary is-outlined" disabled={isParticipating} onClick={this.handleSubmit}>PARTICIPATE</a>
        </div>
      </div>
    );
  }
}

export default SeedomParticipate;
