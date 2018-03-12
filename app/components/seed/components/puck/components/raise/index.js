import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';
import Entries from '../entries';
import { toastr } from 'react-redux-toastr';
import { localeDecimal, getEtherFromWei } from '../../../../../../utils/numbers';
import './index.scss';

class Raise extends Content {
  static propTypes = {
    raiser: PropTypes.shape(),
    isLoading: PropTypes.bool,
    onRaisingCancelled: PropTypes.func.isRequired
  };

  static defaultProps = {
    raiser: null,
    isLoading: false
  };

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
        toastr.warning('RAISE', 'form invalid');
      }
    });
  };

  render() {
    const { className } = this.state;
    const { raiser, isLoading, onRaisingCancelled } = this.props;

    let etherPerEntry;
    if (raiser) {
      etherPerEntry = localeDecimal(getEtherFromWei(raiser.valuePerEntry));
    }

    return (
      <div className={`seedom-content raise ${className}`}>
        <Indicator type={isLoading ? 'waiting' : null} />
        <div className="seedom-overlay">

          <div className="charity-logo small" />

          <div className="text">
            1 entry = {etherPerEntry}
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
