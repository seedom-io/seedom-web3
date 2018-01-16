import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import charityLogo from '../../../../img/logos/charity.png';
import './index.scss';

class Raise extends Content {
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
    this.entriesInput.focus();
  }

  handleSubmit = event => {
    const { setLoading, onRaise } = this.props;

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    this.setState({
      isSubmitting: true
    });

    setLoading(true);
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
        <Indicator type={this.state.isSubmitting ? "waiting" : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
          <input className="input is-primary" type="text" placeholder="NUMBER OF ENTRIES" disabled={this.state.isSubmitting} onChange={this.handleNumOfEntriesChange} ref={(input) => { this.entriesInput = input; }} />
          <a className="button is-primary is-outlined" disabled={this.state.isSubmitting} onClick={this.handleSubmit}>GET MORE ENTRIES</a>
        </div>
      </div>
    );
  }
}

export default Raise;
