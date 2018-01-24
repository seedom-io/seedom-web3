import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';
import Indicator from '../Indicator';
import { localeNumber, getEtherFromWei } from '../../../../utils/numbers';
import './index.scss';

class Withdraw extends Content {
  static propTypes = {
    isWithdrawing: PropTypes.bool.isRequired
  }

  render() {
    const { className } = this.state;
    const { balance, onWithdraw, onWithdrawSkipped, isWithdrawing } = this.props;

    return (
      <div className={`seedom-content withdraw ${className}`}>
        <Indicator type="withdraw" />
        <div className="seedom-overlay">
          <div className="puck-message">
            YOU HAVE
            <div className="balance">{localeNumber(getEtherFromWei(balance))}</div>
            ETHER TO WITHDRAW!
          </div>
        </div>
        <div className="seedom-overlay">
          <a className="button is-dark is-outlined top" disabled={isWithdrawing} onClick={onWithdrawSkipped}>SKIP UNTIL REFRESH</a>
          <a className="button is-black is-outlined" disabled={isWithdrawing} onClick={onWithdraw}>WITHDRAW</a>
        </div>
      </div>
    );
  }
}

export default Withdraw;
