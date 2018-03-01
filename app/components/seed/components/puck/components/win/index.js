import React from 'react';
import Content from '../content';
import Indicator from '../indicator';
import * as messages from '../../../../../../utils/messages';
import * as bytes from '../../../../../../utils/bytes';
import * as etherscan from '../../../../../../utils/etherscan';
import './index.scss';

class Win extends Content {
  render() {
    const { className } = this.state;
    const { isShown, state, network } = this.props;

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
              <div className="random">{messages.dehexMessage(state.charityMessage)}</div>
            </div>
            <div className="right">
              <div className="header">winner message</div>
              <div className="random">{messages.dehexMessage(state.selectedMessage)}</div>
            </div>
          </div>
          <div className="division text address">
            <div>
              <div>congratulations</div>
              <a target="_blank" href={etherscan.getAddressUrl(network, state.selected)}>{bytes.shorten(state.selected)}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Win;
