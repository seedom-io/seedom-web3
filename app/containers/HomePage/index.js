import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { rpcWeb3 } from '../../utils/web3';

import * as blockchainActions from '../../redux/modules/blockchain';
import * as seedomActions from '../../redux/modules/seedom';

import LoadedHomePage from './components/LoadedHomePage';

@connect(
  state => ({
    account: state.blockchain.account,
    contract: state.seedom.contract,
    contractLoaded: state.seedom.contractLoaded,
  }),
  {
    ...blockchainActions,
    ...seedomActions
  }
)
class HomePage extends React.Component {
  static propTypes = {
    account: PropTypes.string.isRequired,
    contractLoaded: PropTypes.bool.isRequired,
    setAccount: PropTypes.func.isRequired,
    loadContract: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.initWeb3();
  }

  initWeb3 = () => {
    const { setAccount } = this.props;
    const { loadContract } = this.props;

    let account;
    rpcWeb3.eth.getAccounts().then(accounts => {
      [account] = accounts;
      rpcWeb3.eth.defaultAccount = account;
      setAccount(account);
    });

    loadContract();
  }

  render() {
    const { account, contract, contractLoaded } = this.props;

    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            {contractLoaded &&
              <LoadedHomePage contract={contract} account={account} />
            }
          </div>
        </div>
      </section>
    );
  }
}


export default HomePage;
