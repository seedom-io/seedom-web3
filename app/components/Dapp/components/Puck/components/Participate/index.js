import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';
import Entries from '../Entries';
import Indicator from '../Indicator';
import charityLogo from '../../../../../../img/logos/charity.png';
import { BigNumber } from 'bignumber.js';
import './index.scss';

class Participate extends Content {
  static propTypes = {
    isParticipating: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      random: '',
      entries: new BigNumber(0)
    };
  }

  show() {
    super.show();
    this.emailInput.focus();
  }

  handleSubmit = event => {
    const { onParticipate } = this.props;
    const { random, entries } = this.state;

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    onParticipate({ random, entries });
  }

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
    const { className, entries } = this.state;
    const { raiser, isParticipating } = this.props;

    return (
      <div className={`seedom-content participate ${className}`}>
        <Indicator type={isParticipating ? 'waiting' : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
          <input className="input is-primary" type="text" placeholder="EMAIL ADDRESS" disabled={isParticipating} ref={(input) => { this.emailInput = input; }} />
          <Entries entries={entries} raiser={raiser} onEntriesChange={this.handleEntriesChange} />
          <textarea rows="3" className="textarea is-primary" type="text" placeholder="TYPE A MESSAGE HERE" disabled={isParticipating} onChange={this.handleRandomChange} />
          <a className="button is-primary is-outlined" disabled={isParticipating} onClick={this.handleSubmit}>PARTICIPATE</a>
        </div>
      </div>
    );
  }
}

export default Participate;
