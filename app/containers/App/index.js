import React from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Nav from '../../components/Nav';
import HomePage from '../HomePage';

const App = () => (
  <div>
    <Helmet
      titleTemplate="%s - Seedom"
      defaultTitle="Seedom"
    >
      <meta name="description" content="Seedom - Seeding the future of philanthropy" />
    </Helmet>
    <div className="hero-head">
      <Nav />
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
