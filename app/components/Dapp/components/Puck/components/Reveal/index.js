import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';
import Indicator from '../Indicator';
import charityLogo from '../../../../../../img/logos/charity.png';
import './index.scss';

class Reveal extends Content {
  static propTypes = {
    isRevealing: PropTypes.bool.isRequired
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
    this.randomTextarea.focus();
  }

  handleSubmit = event => {
    const { onReveal } = this.props;
    const { random } = this.state;

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    onReveal(random);
  }

  handleRandomChange = event => {
    this.setState({
      random: event.target.value
    });
  };

  render() {
    const { className } = this.state;
    const { isRevealing } = this.props;

    return (
      <div className={`seedom-content participate ${className}`}>
        <Indicator type={isRevealing ? 'waiting' : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
          <textarea className="textarea is-primary" type="text" placeholder="TYPE YOUR RANDOM HERE" disabled={isRevealing} onChange={this.handleRandomChange} ref={(textarea) => { this.randomTextarea = textarea; }} />
          <a className="button is-primary is-outlined" disabled={isRevealing} onClick={this.handleSubmit}>REVEAL</a>
        </div>
      </div>
    );
  }
}

export default Reveal;
