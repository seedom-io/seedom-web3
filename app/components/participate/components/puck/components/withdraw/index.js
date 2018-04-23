import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';
import { zero, localeDecimal, getEtherFromWei } from '../../../../../../utils/numbers';
import './index.scss';

const getMaxBalance = (balances) => {
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
};

class Withdraw extends Content {
  static propTypes = {
    balances: PropTypes.shape(),
    isShown: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool,
    onWithdrawSkipped: PropTypes.func.isRequired,
    onWithdraw: PropTypes.func.isRequired
  };

  static defaultProps = {
    balances: null,
    isLoading: false
  };

  handleWithdraw = (contractAddress) => {
    const { onWithdraw } = this.props;
    onWithdraw(contractAddress);
  }

  render() {
    const { balances } = this.props;
    if (!balances) {
      return null;
    }

    const { className } = this.state;
    const { isShown, onWithdrawSkipped, isLoading } = this.props;
    const maxBalance = getMaxBalance(balances);

    return (
      <div className={`seedom-content withdraw ${className}`}>
        <Indicator type={isShown ? 'success' : null} />
        <div className="seedom-overlay layout">
          <div className="division text top medium-pad">
            <div>you have</div>
            <div className="balance">
              {localeDecimal(getEtherFromWei(maxBalance.balance))}
              <span className="ether is-dark">
                <i className="fas fa-bars" />
              </span>
            </div>
            <div>to withdraw!</div>
          </div>
          <div className="division bottom large-pad">
            <div className="field">
              <div className="control">
                <a className="button is-dark" disabled={isLoading} onClick={() => this.handleWithdraw(maxBalance.contractAddress)}>withdraw ether</a>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <a className="button is-white is-outlined" disabled={isLoading} onClick={onWithdrawSkipped}>skip for now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Withdraw;
