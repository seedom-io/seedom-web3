import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Content from '../Content';
import Indicator from '../Indicator';
import Random from '../Random';
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
    const isRandomValid = this.random.validate();
    this.setState({ isRandomValid }, done);
  }

  isFormValid = () => {
    return this.state.isRandomValid;
  }

  handleSubmit = () => {
    this.validateForm(() => {
      const { onReveal } = this.props;
      if (this.isFormValid()) {
        const random = this.random.value();
        onReveal(random);
      } else {
        toast.error('There was a problem revealing.', {
          position: toast.POSITION.TOP_CENTER
        });
      }
    });
  }

  handleRandomChange = random => {
    this.setState({ random });
  };

  render() {
    const { className } = this.state;
    const { isRevealing } = this.props;

    return (
      <div className={`seedom-content participate ${className}`}>
        <Indicator type={isRevealing ? 'waiting' : null} />
        <div className="seedom-overlay">

          <div className="charity-logo" />

          <Random
            disabled={isRevealing}
            ref={(component) => { this.random = component; }}
          />

          <div className="field">
            <div className="control">
              <a className="button is-dark" disabled={isRevealing} onClick={this.handleSubmit}>reveal</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Reveal;
