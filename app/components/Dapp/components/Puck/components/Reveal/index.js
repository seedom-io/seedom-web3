import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';
import Indicator from '../Indicator';
import charityLogo from '../../../../../../img/logos/charity.png';
import Field from '../Field';
import './index.scss';

class Reveal extends Content {
  static propTypes = {
    isRevealing: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      random: '',
      entries: 0
    };
  }

  show() {
    super.show();
    this.random.focus();
  }

  validateForm = (done) => {
    const { random } = this.state;

    const isRandomValid = random.length > 0;
    this.setState({ isRandomValid }, done);
  }

  isFormValid = () => {
    return this.state.isRandomValid;
  }

  handleSubmit = event => {
    this.validateForm(() => {
      const { onReveal } = this.props;
      const { random } = this.state;

      if (event !== undefined && event.preventDefault) {
        event.preventDefault();
      }

      if (this.isFormValid()) {
        onReveal(random);
      } else {
        console.log('nope');
      }
    });
  }

  handleRandomChange = random => {
    this.setState({ random });
  };

  render() {
    const { className, random, isRandomValid } = this.state;
    const { isRevealing } = this.props;

    return (
      <div className={`seedom-content participate ${className}`}>
        <Indicator type={isRevealing ? 'waiting' : null} />
        <div className="seedom-overlay">

          <img src={charityLogo} />

          <Field
            format="textblock"
            type="text"
            value={random}
            placeholder="reveal your message&#10;to the world"
            disabled={isRevealing}
            isValid={isRandomValid}
            onChange={this.handleRandomChange}
            ref={(component) => { this.random = component; }}
          />

          <div className="field">
            <div className="control">
              <a className="button is-primary is-outlined" disabled={isRevealing} onClick={this.handleSubmit}>REVEAL</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Reveal;
