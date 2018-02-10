import React from 'react';
import Content from '../Content';
import { localeDecimal, getEtherFromWei } from '../../../../utils/numbers';
import './index.scss';
import charityLogo from '../../../../../../img/logos/charity.png';

class Begin extends Content {
  render() {
    const { className } = this.state;
    const { raiser, onBegin } = this.props;

    return (
      <div className={`seedom-content begin ${className}`}>
        <img src={charityLogo} />
        <div className="etherPerEntry">1 ENTRY = {localeDecimal(getEtherFromWei(raiser.valuePerEntry))}Ξ</div>
        <a className="button is-primary is-outlined" onClick={onBegin}>OBTAIN ENTRIES</a>
      </div>
    );
  }
}

export default Begin;
