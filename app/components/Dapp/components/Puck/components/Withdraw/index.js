import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';
import Indicator from '../Indicator';
import { zero, localeDecimal, getEtherFromWei } from '../../../../utils/numbers';
import './index.scss';

class Withdraw extends Content {
  static propTypes = {
    isWithdrawing: PropTypes.bool.isRequired
  }

  getMaxBalance() {
    const { balances } = this.props;

    let maxBalance = zero();
    let maxContractAddress = null;
    for (const contractAddress in balances) {
      const balance = balances[contractAddress];
      if (balance.isGreaterThan(maxBalance)) {
        maxBalance = balance;
        maxContractAddress = contractAddress;
      }
    }

    return {
      contractAddress: maxContractAddress,
      balance: maxBalance
    };
  }

  handleWithdraw = (contractAddress) => {
    const { onWithdraw } = this.props;
    onWithdraw(contractAddress);
  }

  render() {
    const { className } = this.state;
    const { onWithdrawSkipped, isWithdrawing } = this.props;
    const maxBalance = this.getMaxBalance();

    return (
      <div className={`seedom-content withdraw ${className}`}>
        <Indicator type="withdraw" />
        <div className="seedom-overlay">
          <div className="puck-message">
            YOU HAVE
            <div className="balance">{localeDecimal(getEtherFromWei(maxBalance.balance))}</div>
            ETHER TO WITHDRAW!
          </div>
        </div>
        <div className="seedom-overlay">
          <a className="button is-dark is-outlined top" disabled={isWithdrawing} onClick={onWithdrawSkipped}>SKIP UNTIL REFRESH</a>
          <a className="button is-black is-outlined" disabled={isWithdrawing} onClick={() => this.handleWithdraw(maxBalance.contractAddress)}>WITHDRAW</a>
        </div>
      </div>
    );
  }
}

export default Withdraw;
