import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';
import { zero, localeDecimal, getEtherFromWei } from '../../../../../../utils/numbers';
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
    const { isShown, onWithdrawSkipped, isWithdrawing } = this.props;
    const maxBalance = this.getMaxBalance();

    return (
      <div className={`seedom-content withdraw ${className}`}>
        <Indicator type={isShown ? 'success' : null} />
        <div className="seedom-overlay layout">
          <div className="division text top">
            <div>you have</div>
            <div className="balance">{localeDecimal(getEtherFromWei(maxBalance.balance))}Ξ</div>
            <div>to withdraw!</div>
          </div>
          <div className="division bottom">
            <div className="field">
              <div className="control">
                <a className="button is-dark" disabled={isWithdrawing} onClick={() => this.handleWithdraw(maxBalance.contractAddress)}>withdraw ether</a>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <a className="button is-white is-outlined" disabled={isWithdrawing} onClick={onWithdrawSkipped}>skip for now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Withdraw;
