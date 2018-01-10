import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.scss';
import HomePage from '../HomePage';

const App = () => (
  <div>
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item" href="https://seedom-io.github.io/seedom-whitepaper/seedom-whitepaper.pdf">
                Whitepaper
              </a>
              <span className="navbar-item">
                <a className="button is-white is-outlined is-small" href="https://github.com/seedom/seedom-solidity/blob/master/contract/seedom.sol">
                  <span className="icon">
                    <i className="fa fa-github" />
                  </span>
                  <span>View Smart Contract</span>
                </a>
              </span>
              <a className="navbar-item" href="https://medium.com/@seedom.io">
                <span className="icon">
                  <i className="fa fa-lg fa-medium" />
                </span>
              </a>
              <a className="navbar-item" href="http://reddit.com/r/seedom_io">
                <span className="icon">
                  <i className="fa fa-lg fa-reddit" />
                </span>
              </a>
              <a className="navbar-item" href="https://www.facebook.com/seedom.io">
                <span className="icon">
                  <i className="fa fa-lg fa-facebook" />
                </span>
              </a>

              <a className="navbar-item" href="https://twitter.com/seedom_io">
                <span className="icon">
                  <i className="fa fa-lg fa-twitter" />
                </span>
              </a>

              <a className="navbar-item" href="https://www.instagram.com/seedom.io/">
                <span className="icon">
                  <i className="fa fa-lg fa-instagram" />
                </span>
              </a>

              <a className="navbar-item" href="https://t.me/seedomio">
                <span className="icon">
                  <i className="fa fa-lg fa-telegram" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
      </div>
    </Router>
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>Seedom</strong> by the <a className="is-green" href="mailto:team@seedom.io">Seedom Team</a>.
          </p>
        </div>
      </div>
    </footer>
  </div>
);

export default App;
