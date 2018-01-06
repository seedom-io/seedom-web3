import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './containers/Home';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))