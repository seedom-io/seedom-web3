import React, { Component } from 'react';
import Dapp from '../../components/Dapp';
import './HomePage.scss';

class HomePage extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <Dapp />
            </div>
          </div>
        </section>
        <section className="advantages">
          <div className="container has-text-centered">
            <h1 className="title">The most powerful platform that benefits the world’s leading causes and their supporters.</h1>
            <div className="columns">

              <div className="column feature">
                <span className="icon is-large has-text-success">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-square fa-stack-2x" />
                    <i className="fas fa-globe fa-stack-1x fa-inverse" />
                  </span>
                </span>
                <h2 className="subtitle">Purposeful</h2>
                <p>Seedom chooses causes that are</p>
                <p>legitimate, active, and relevant</p>
                <p>
                  <span className="icon has-text-danger">
                    <i className="fas fa-heart" />
                  </span>
                </p>
              </div>

              <div className="column feature">
                <span className="icon is-large has-text-success">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-square fa-stack-2x" />
                    <i className="fas fa-eye fa-stack-1x fa-inverse" />
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
                    <i className="fas fa-square fa-stack-2x" />
                    <i className="fas fa-life-ring fa-stack-1x fa-inverse" />
                  </span>
                </span>
                <h2 className="subtitle has-text-weight-light">Safe</h2>
                <p>The cause has full control</p>
                <p>Guaranteed winner</p>
                <p>No backdoors and no loopholes</p>
              </div>

              <div className="column feature">
                <span className="icon is-large has-text-success">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-square fa-stack-2x" />
                    <i className="fas fa-lock fa-stack-1x fa-inverse" />
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

