import React from 'react';
import SeedomContent from '../SeedomContent';
import eff from './eff.png';
import './index.scss';

class SeedomReveal extends SeedomContent {
  constructor(props) {
    super(props);
    this.state = {
      seed: '',
      numOfEntries: 0
    };
  }

  show() {
    super.show();
    this.randomTextarea.focus();
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
        <textarea className="textarea is-primary" type="text" placeholder="TYPE YOUR RANDOM HERE" onChange={this.handleSeedChange} ref={(textarea) => { this.randomTextarea = textarea; }} />
        <a className="button is-primary" onClick={this.handleSubmit}>REVEAL</a>
      </div>
    );
  }
}

export default SeedomReveal;
