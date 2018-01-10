import React from 'react';
import SeedomContent from '../SeedomContent';
import charityLogo from '../../img/logos/charity.png';
import './index.scss';

class SeedomParticipate extends SeedomContent {
  constructor(props) {
    super(props);
    this.state = {
      seed: '',
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

    onParticipate({ seed: this.state.seed, numOfEntries: this.state.numOfEntries });
  }

  handleSeedChange = event => {
    this.setState({
      seed: event.target.value
    });
  };

  handleNumOfEntriesChange = event => {
    this.setState({
      numOfEntries: event.target.value
    });
  };

  render() {
    return (
      <div className={`seedom-content participate ${this.state.className}`}>
        <img src={charityLogo} />
        <input className="input is-primary" type="text" placeholder="EMAIL ADDRESS" onChange={this.handleNumOfEntriesChange} ref={(input) => { this.emailInput = input; }} />
        <input className="input is-primary" type="text" placeholder="NUMBER OF ENTRIES" onChange={this.handleNumOfEntriesChange} />
        <textarea rows="3" className="textarea is-primary" type="text" placeholder="TYPE A MESSAGE HERE" onChange={this.handleSeedChange} />
        <a className="button is-primary is-outlined" onClick={this.handleSubmit}>PARTICIPATE</a>
      </div>
    );
  }
}

export default SeedomParticipate;
