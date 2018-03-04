import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Content from '../content';
import Indicator from '../indicator';
import Entries from '../entries';
import { localeDecimal, getEtherFromWei } from '../../../../../../utils/numbers';
import './index.scss';

class Raise extends Content {
  static propTypes = {
    isRaising: PropTypes.bool.isRequired
  }

  show() {
    super.show();
    this.entries.focus();
  }

  validateForm = (done) => {
    const isEntriesValid = this.entries.validate();
    this.setState({ isEntriesValid }, done);
  }

  isFormValid = () => {
    return this.state.isEntriesValid;
  }

  handleSubmit = () => {
    this.validateForm(() => {
      const { onRaise } = this.props;
      if (this.isFormValid()) {
        const entries = this.entries.value();
        onRaise(entries);
      } else {
        toast.error('There was a problem raising', {
          position: toast.POSITION.TOP_CENTER
        });
      }
    });
  };

  render() {
    const { className } = this.state;
    const { raiser, isLoading, onRaisingCancelled } = this.props;

    return (
      <div className={`seedom-content raise ${className}`}>
        <Indicator type={isLoading ? 'waiting' : null} />
        <div className="seedom-overlay">

          <div className="charity-logo small" />

          <div className="text">
            1 entry = {localeDecimal(getEtherFromWei(raiser.valuePerEntry))}
            <span className="ether">Ξ</span>
          </div>

          <Entries
            raiser={raiser}
            disabled={isLoading}
            ref={(component) => { this.entries = component; }}
          />

          <div className="field">
            <div className="control">
              <a className="button is-dark" disabled={isLoading} onClick={this.handleSubmit}>get more entries</a>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <a className="button is-white is-outlined" onClick={onRaisingCancelled}>cancel</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Raise;
