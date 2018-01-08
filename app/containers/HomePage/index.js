import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import SeedomPuck from '../../components/SeedomPuck';

import { rpcWeb3, wsWeb3 } from '../../utils/web3';

import * as blockchainActions from '../../redux/modules/blockchain';

@connect(
  state => ({
    account: state.blockchain.account,
  }),
  {
    ...blockchainActions,
  }
)
class HomePage extends React.Component {
  static propTypes = {
    account: PropTypes.string.isRequired,
    setAccount: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.initWeb3();
  }

  initWeb3 = () => {
    const { setAccount } = this.props;

    let account;
    rpcWeb3.eth.getAccounts().then(accounts => {
      [account] = accounts;
      rpcWeb3.eth.defaultAccount = account;
      setAccount(account);
    });
  }

  render() {
    const { account } = this.props;

    return (
      <div>
        <h2>Welcome to Seedom</h2>
        <p>
          <strong>Account:</strong> {account}
        </p>
        <Button />
        <SeedomPuck />
      </div>
    );
  }
}


export default HomePage;
