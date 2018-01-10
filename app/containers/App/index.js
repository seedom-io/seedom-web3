import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.scss';
import HomePage from '../HomePage';

const App = () => (
  <div>
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
