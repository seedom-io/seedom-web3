import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { rpcWeb3 } from '../../utils/web3';

import {
  setAccount
} from '../../redux/modules/blockchain';

import {
  loadContract
} from '../../redux/modules/seedom';


import LoadedHomePage from './components/LoadedHomePage';

import './HomePage.scss';

class HomePage extends React.Component {
  static propTypes = {
    account: PropTypes.string.isRequired,
    contractLoaded: PropTypes.bool.isRequired,
    handleSetAccount: PropTypes.func.isRequired,
    onLoad: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      hasMetamask: false
    };
  }

  componentWillMount() {
    const { onLoad } = this.props;

    onLoad();

    if (rpcWeb3) {
      this.setState({
        hasMetamask: true
      });
      this.initWeb3();
    }
  }

  initWeb3 = () => {
    const { handleSetAccount } = this.props;

    let account;
    rpcWeb3.eth.getAccounts().then(accounts => {
      [account] = accounts;
      rpcWeb3.eth.defaultAccount = account;
      handleSetAccount(account);
    });
  }

  render() {
    const { account, contract, contractLoaded } = this.props;
    const { hasMetamask } = this.state;

    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              {contractLoaded &&
                <LoadedHomePage
                  account={account}
                  contract={contract}
                  hasMetamask={hasMetamask}
                />
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

const mapStateToProps = state => {
  return {
    account: state.blockchain.account,
    contract: state.seedom.contract,
    contractLoaded: state.seedom.contractLoaded,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => {
      dispatch(loadContract());
    },
    handleSetAccount: account => {
      dispatch(setAccount(account));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

