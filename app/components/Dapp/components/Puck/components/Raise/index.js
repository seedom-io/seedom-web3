import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';
import Indicator from '../Indicator';
import Entries from '../Entries';
import charityLogo from '../../../../../../img/logos/charity.png';
import { localeDecimal, getEtherFromWei } from '../../../../utils/numbers';
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

  handleSubmit = event => {
    this.validateForm(() => {
      const { onRaise } = this.props;

      if (event !== undefined && event.preventDefault) {
        event.preventDefault();
      }

      if (this.isFormValid()) {
        const entries = this.entries.value();
        onRaise(entries);
      } else {
        console.log('nope');
      }
    });
  };

  render() {
    const { className } = this.state;
    const { raiser, isRaising } = this.props;

    return (
      <div className={`seedom-content raise ${className}`}>
        <Indicator type={isRaising ? 'waiting' : null} />
        <div className="seedom-overlay">

          <img src={charityLogo} />

          <div className="etherPerEntry">1 ENTRY = {localeDecimal(getEtherFromWei(raiser.valuePerEntry))}Ξ</div>

          <Entries
            raiser={raiser}
            disabled={isRaising}
            ref={(component) => { this.entries = component; }}
          />

          <div className="field">
            <div className="control">
              <a className="button is-primary is-outlined" disabled={isRaising} onClick={this.handleSubmit}>GET MORE ENTRIES</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Raise;
