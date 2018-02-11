import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';
import Indicator from '../Indicator';
import Entries from '../Entries';
import charityLogo from '../../../../../../img/logos/charity.png';
import { inputClass } from '../../../../utils/validation';
import { BigNumber } from 'bignumber.js';
import './index.scss';

class Raise extends Content {
  static propTypes = {
    isRaising: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      entries: new BigNumber(0),
      isEntriesValid: true
    };
  }

  show() {
    super.show();
    //this.entriesInput.focus();
  }

  validateForm = () => {
    const { entries } = this.state;
    const isEntriesValid = !Number.isNaN(Number(entries));
    this.setState({
      isEntriesValid
    });
  }

  isFormValid = () => {
    return this.state.isEntriesValid;
  }

  handleSubmit = event => {
    this.validateForm();

    const { onRaise } = this.props;
    const { entries } = this.state;

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    if (this.isFormValid()) {
      onRaise(entries);
    } else {
      console.log('nope');
    }
  }

  handleEntriesChange = entries => {
    this.setState({
      entries
    });
  };

  render() {
    const { className, entries, isEntriesValid } = this.state;
    const { raiser, isRaising } = this.props;

    const isSubmitDisabled = isRaising || !entries;

    return (
      <div className={`seedom-content raise ${className}`}>
        <Indicator type={isRaising ? 'waiting' : null} />
        <div className="seedom-overlay">

          <img src={charityLogo} />

          <div className="field">
            <Entries
              className={inputClass(isEntriesValid)}
              entries={entries}
              raiser={raiser}
              disabled={isRaising}
              onEntriesChange={this.handleEntriesChange}
            />
            {isEntriesValid ? <p>&nbsp;</p> : <p className="help is-danger">Number of entries is invalid</p>}
          </div>

          <div className="field">
            <div className="control">
              <a className="button is-primary is-outlined" disabled={isSubmitDisabled} onClick={this.handleSubmit}>GET MORE ENTRIES</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Raise;
