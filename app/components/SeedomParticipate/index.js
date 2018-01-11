import React from 'react';
import SeedomContent from '../SeedomContent';
import SeedomIndicator from '../SeedomIndicator';
import charityLogo from '../../img/logos/charity.png';
import './index.scss';

class SeedomParticipate extends SeedomContent {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false,
      seed: '',
      numOfEntries: 0
    };
  }

  show() {
    super.show();
    this.setState({
      isSubmitting: false
    });
    this.emailInput.focus();
  }

  handleSubmit = event => {
    const { setLoading, onParticipate } = this.props;

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    this.setState({
      isSubmitting: true
    });

    setLoading(true);
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
        <SeedomIndicator type={this.state.isSubmitting ? "waiting" : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
          <input className="input is-primary" type="text" placeholder="EMAIL ADDRESS" disabled={this.state.isSubmitting} onChange={this.handleNumOfEntriesChange} ref={(input) => { this.emailInput = input; }} />
          <input className="input is-primary" type="text" placeholder="NUMBER OF ENTRIES" disabled={this.state.isSubmitting} onChange={this.handleNumOfEntriesChange} />
          <textarea rows="3" className="textarea is-primary" type="text" placeholder="TYPE A MESSAGE HERE" disabled={this.state.isSubmitting} onChange={this.handleSeedChange} />
          <a className="button is-primary is-outlined" disabled={this.state.isSubmitting} onClick={this.handleSubmit}>PARTICIPATE</a>
        </div>
      </div>
    );
  }
}

export default SeedomParticipate;
