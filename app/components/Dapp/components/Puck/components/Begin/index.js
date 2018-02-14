import React from 'react';
import Content from '../Content';
import { localeDecimal, getEtherFromWei } from '../../../../utils/numbers';

class Begin extends Content {
  render() {
    const { className } = this.state;
    const { raiser, onBegin } = this.props;

    return (
      <div className={`seedom-content begin ${className}`}>
        <div className="seedom-overlay">
          <div className="charity-logo" />
        </div>
        <div className="seedom-overlay layout">
          <div className="header-footer division text">1 entry = {localeDecimal(getEtherFromWei(raiser.valuePerEntry))}Ξ</div>
          <div className="header-footer division">
            <div className="field">
              <div className="control">
                <a className="button is-dark" onClick={onBegin}>obtain entries</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Begin;
