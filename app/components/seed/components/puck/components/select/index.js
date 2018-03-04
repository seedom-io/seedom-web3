import React from 'react';
import Content from '../content';
import Indicator from '../indicator';
import * as messages from '../../../../../../utils/messages';
import * as bytes from '../../../../../../utils/bytes';
import * as etherscan from '../../../../../../utils/etherscan';
import './index.scss';

class Select extends Content {
  render() {
    const { className } = this.state;
    const { isShown, state, network } = this.props;

    return (
      <div className={`seedom-content selection ${className}`}>
        <Indicator type={isShown ? 'selection' : null} />
        <div className="seedom-overlay layout">
          <div className="division text third top">
            <div className="charity-logo small" />
          </div>
          <div className="division text center">
            <div className="left">
              <div className="header">charity message</div>
              <div className="random">{messages.dehexMessage(state.charityMessage)}</div>
            </div>
            <div className="right">
              <div className="header">owner message</div>
              <div className="random">{messages.dehexMessage(state.ownerMessage)}</div>
            </div>
          </div>
          <div className="division text third bottom">
            <div className="header">selected message</div>
            <div className="random">{messages.dehexMessage(state.selectedMessage)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Select;
