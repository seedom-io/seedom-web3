import React from 'react';
import PropTypes from 'prop-types';
import * as etherscan from '../../../../../../utils/etherscan';
import Content from '../content';
import Indicator from '../indicator';
import CauseLogo from '../../../../../causeLogo';
import './index.scss';

class Selection extends Content {
  static propTypes = {
    isShown: PropTypes.bool.isRequired,
    state: PropTypes.shape(),
    network: PropTypes.shape(),
    cause: PropTypes.shape()
  };

  static defaultProps = {
    state: null,
    network: null,
    cause: null
  };

  render() {
    const { className } = this.state;
    const { isShown, state, network, cause } = this.props;

    let causeMessage;
    let ownerMessage;
    let participantMessage;
    if (state) {
      ({ causeMessage, ownerMessage, participantMessage } = state);
    }

    return (
      <div className={`seedom-content selection ${className}`}>
        <Indicator type={isShown ? 'selection' : null} />
        <div className="seedom-overlay layout">
          <div className="division text top small-pad">
            <CauseLogo cause={cause} size="small" />
          </div>
          <div className="division text center narrow">
            <div className="left">
              <div className="header">cause message</div>
              <div className="value">{causeMessage}</div>
            </div>
            <div className="right">
              <div className="header">owner message</div>
              <div className="value">{ownerMessage}</div>
            </div>
          </div>
          <div className="division text bottom large-pad slim">
            <div className="header">participant message</div>
            <div className="value">{participantMessage}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Selection;
