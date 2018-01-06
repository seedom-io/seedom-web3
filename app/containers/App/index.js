import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomePage from '../containers/HomePage';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={HomePage}/>
      </div>
    </Router>
  );
}