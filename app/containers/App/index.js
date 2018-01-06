import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomePage from '../HomePage';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage}/>
      </div>
    </Router>
  );
}

export default App;