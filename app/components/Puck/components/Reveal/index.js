import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import charityLogo from '../../../../img/logos/charity.png';
import './index.scss';

class Reveal extends Content {
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
    this.randomTextarea.focus();
  }

  handleSubmit = event => {
    const { setLoading, onReveal } = this.props;

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    this.setState({
      isSubmitting: true
    });

    setLoading(true);
    onReveal({ seed: this.state.seed, numOfEntries: this.state.numOfEntries });
  }

  handleSeedChange = event => {
    this.setState({
      seed: event.target.value
    });
  };

  render() {
    return (
      <div className={`seedom-content participate ${this.state.className}`}>
        <Indicator type={this.state.isSubmitting ? "waiting" : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
          <textarea className="textarea is-primary" type="text" placeholder="TYPE YOUR RANDOM HERE" disabled={this.state.isSubmitting} onChange={this.handleSeedChange} ref={(textarea) => { this.randomTextarea = textarea; }} />
          <a className="button is-primary is-outlined" disabled={this.state.isSubmitting} onClick={this.handleSubmit}>REVEAL</a>
        </div>
      </div>
    );
  }
}

export default Reveal;
