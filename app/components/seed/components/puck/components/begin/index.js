import React from 'react';
import Content from '../content';
import { localeDecimal, getEtherFromWei } from '../../../../../../utils/numbers';
import { Link } from 'react-router-dom';
import './index.scss';

class Begin extends Content {
  render() {
    const { className } = this.state;
    const { raiser, onBegin } = this.props;

    return (
      <div className={`seedom-content begin ${className}`}>
        <div className="seedom-overlay layout">
          <div className="division text top small-pad">
            <div>
              <span>1 entry = {localeDecimal(getEtherFromWei(raiser.valuePerEntry))}</span>
              <span className="ether">Ξ</span>
            </div>
            <div className="supporting">now seeding</div>
          </div>
          <div className="division center">
            <div className="charity-logo" />
          </div>
          <div className="division bottom medium-pad">
            <div className="field">
              <div className="control">
                <Link className="button is-white is-outlined" to={`${ETH_PATH}help`}>how does this work?</Link>
              </div>
            </div>
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