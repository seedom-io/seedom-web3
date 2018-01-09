import React from 'react';
import SeedomContent from '../SeedomContent';
import eff from './eff.png';
import './index.scss';

class SeedomRaise extends SeedomContent {
  constructor(props) {
    super(props);
    this.state = {
      seed: '',
      numOfEntries: 0
    };
  }

  show() {
    super.show();
    this.entriesInput.focus();
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
        <img src={eff} />
        <input className="input is-primary" type="text" placeholder="NUMBER OF ENTRIES" onChange={this.handleNumOfEntriesChange} ref={(input) => { this.entriesInput = input; }} />
        <a className="button is-primary" onClick={this.handleRaise}>GET MORE ENTRIES</a>
      </div>
    );
  }
}

export default SeedomRaise;
