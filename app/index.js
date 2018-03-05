import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import reduceReducers from './utils/reduceReducers';
import seedomReducer from './reducers/seedom';
import ethereumReducer from './reducers/ethereum';
import seedomMiddleware from './middleware/seedom';
import ethereumMiddleware from './middleware/ethereum';

import './sass/bulma.scss';

import Head from './components/head';
import Nav from './components/nav';
import Seed from './components/seed';
import Suggest from './components/suggest';
import History from './components/history';
import Help from './components/help';
import Footer from './components/footer';

const history = createHistory();

const store = createStore(
  reduceReducers(
    routerReducer,
    ethereumReducer,
    seedomReducer
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    routerMiddleware(history),
    ethereumMiddleware,
    seedomMiddleware
  )
);

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

const AppContainer = () => (
  <ConnectedSwitch>
    <Route exact path="/" component={Seed} />
    <Route path="/suggest" component={Suggest} />
    <Route path="/history" component={History} />
    <Route path="/help" component={Help} />
  </ConnectedSwitch>
);

const App = connect(state => ({
  location: state.location,
}))(AppContainer);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Head />
        <Nav />
        <App />
        <Footer />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
