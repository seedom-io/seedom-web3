import React from 'react';
import SeedomContent from '../SeedomContent';
import charityLogo from '../../img/logos/charity.png';
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
    const { onRaise } = this.props;

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    onRaise({ seed: this.state.seed, numOfEntries: this.state.numOfEntries });
  }

  handleNumOfEntriesChange = event => {
    this.setState({
      numOfEntries: event.target.value
    });
  };

  render() {
    return (
      <div className={`seedom-content raise ${this.state.className}`}>
        <img src={charityLogo} />
        <input className="input is-primary" type="text" placeholder="NUMBER OF ENTRIES" onChange={this.handleNumOfEntriesChange} ref={(input) => { this.entriesInput = input; }} />
        <a className="button is-primary" onClick={this.handleSubmit}>GET MORE ENTRIES</a>
      </div>
    );
  }
}

export default SeedomRaise;
