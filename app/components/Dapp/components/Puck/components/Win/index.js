import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import * as randoms from '../../../../utils/randoms';
import * as bytes from '../../../../utils/bytes';
import './index.scss';

class Win extends Content {
  render() {
    const { className } = this.state;
    const { isShown, state } = this.props;

    return (
      <div className={`seedom-content win ${className}`}>
        <Indicator type={isShown ? 'win' : null} />
        <div className="seedom-overlay layout">
          <div className="division text charity">
            <div className="charity-logo" />
          </div>
          <div className="division text random">
            <div className="left">
              <div className="header">charity message</div>
              <div className="random">{randoms.dehexRandom(state.charityRandom)}</div>
            </div>
            <div className="right">
              <div className="header">winner message</div>
              <div className="random">{randoms.dehexRandom(state.winnerRandom)}</div>
            </div>
          </div>
          <div className="division text address">
            <div>
              <div>congratulations</div>
              <a href={`https://etherscan.io/address/${state.winner}`} target="_blank">{bytes.shorten(state.winner)}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Win;
