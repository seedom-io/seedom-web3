import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { rpcWeb3 } from '../../utils/web3';

import * as blockchainActions from '../../redux/modules/blockchain';
import * as seedomActions from '../../redux/modules/seedom';

import LoadedHomePage from './components/LoadedHomePage';

import './HomePage.scss';

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
      <div>
        <section className="hero is-info is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              {contractLoaded &&
                <LoadedHomePage contract={contract} account={account} />
              }
            </div>
          </div>
        </section>
        <section className="advantages">
          <div className="container has-text-centered">
            <h1 className="title">The most powerful platform that benefits the world’s leading charities and their supporters.</h1>
            <div className="columns">

              <div className="column feature">
                <span className="icon is-large has-text-success">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-square fa-stack-2x" />
                    <i className="fa fa-globe fa-stack-1x fa-inverse" />
                  </span>
                </span>
                <h2 className="subtitle">Purposeful</h2>
                <p>Seedom chooses charities that are</p>
                <p>legitimate, active, and relevant</p>
                <p>
                  <span className="icon has-text-danger">
                    <i className="fa fa-heart" />
                  </span>
                </p>
              </div>

              <div className="column feature">
                <span className="icon is-large has-text-success">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-square fa-stack-2x" />
                    <i className="fa fa-eye fa-stack-1x fa-inverse" />
                  </span>
                </span>
                <h2 className="subtitle has-text-weight-light">Transparent</h2>
                <p>100% open source</p>
                <p>All transactions are public</p>
                <p>The team behind Seedom is known</p>
              </div>

              <div className="column feature">
                <span className="icon is-large has-text-success">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-square fa-stack-2x" />
                    <i className="fa fa-life-ring fa-stack-1x fa-inverse" />
                  </span>
                </span>
                <h2 className="subtitle has-text-weight-light">Safe</h2>
                <p>The charity has full control</p>
                <p>Guaranteed winner</p>
                <p>No backdoors and no loopholes</p>
              </div>

              <div className="column feature">
                <span className="icon is-large has-text-success">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-square fa-stack-2x" />
                    <i className="fa fa-lock fa-stack-1x fa-inverse" />
                  </span>
                </span>
                <h2 className="subtitle">Secure</h2>
                <p>Backed by native Ethereum security</p>
                <p>Protected against miner manipulation</p>
              </div>
            </div>

            <div className="columns">
              <div className="column is-offset-one-quarter" />
              <div className="column">
                <a className="button is-success is-outlined" href="https://seedom-io.github.io/seedom-whitepaper/seedom-whitepaper.pdf">
                  <span>Read Whitepaper</span>
                </a>
              </div>

              <div className="column">
                <a className="button is-success is-outlined" href="https://github.com/seedom/seedom-solidity/blob/master/contract/seedom.sol">
                  <span>View Smart Contract</span>
                </a>
              </div>
              <div className="column is-offset-one-quarter" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}


export default HomePage;
