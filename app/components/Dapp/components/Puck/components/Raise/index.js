import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';
import Indicator from '../Indicator';
import Entries from '../Entries';
import charityLogo from '../../../../../../img/logos/charity.png';
import { BigNumber } from 'bignumber.js';
import './index.scss';

class Raise extends Content {
  static propTypes = {
    isRaising: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      entries: new BigNumber(0)
    };
  }

  show() {
    super.show();
    //this.entriesInput.focus();
  }

  handleSubmit = event => {
    const { onRaise } = this.props;
    const { entries } = this.state;

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    onRaise(entries);
  }

  handleEntriesChange = entries => {
    this.setState({
      entries
    });
  };

  render() {
    const { className, entries } = this.state;
    const { raiser, isRaising } = this.props;

    return (
      <div className={`seedom-content raise ${className}`}>
        <Indicator type={isRaising ? 'waiting' : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
          <Entries entries={entries} raiser={raiser} onEntriesChange={this.handleEntriesChange} />
          <a className="button is-primary is-outlined" disabled={isRaising} onClick={this.handleSubmit}>GET MORE ENTRIES</a>
        </div>
      </div>
    );
  }
}

export default Raise;
