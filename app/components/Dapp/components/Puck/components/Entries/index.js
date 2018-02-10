import React, { Component } from 'react';
import { localeDecimal, getEtherFromWei } from '../../../../utils/numbers';
import { BigNumber } from 'bignumber.js';
import './index.scss';

class Entries extends Component {
  handleEntriesChange = event => {
    const value = (event.target.value === '') ? 0 : event.target.value;
    this.props.onEntriesChange(new BigNumber(value));
  };

  render() {
    const { entries, raiser, isDisabled } = this.props;

    const wei = entries.times(raiser.valuePerEntry);

    return (
      <div className="seedom-entry">
        <input className="input is-primary" type="number" placeholder="ENTRIES" disabled={isDisabled} onChange={this.handleEntriesChange} />
        <div className="ether">{localeDecimal(getEtherFromWei(wei))}Ξ</div>
      </div>
    );
  }
}

export default Entries;
