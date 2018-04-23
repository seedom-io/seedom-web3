import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import ReduxToastr from 'react-redux-toastr'
import createHistory from 'history/createBrowserHistory';
import reduceReducers from './utils/reduceReducers';
import pollingReducer from './reducers/polling';
import fundraiserReducer from './reducers/fundraiser';
import ethereumReducer from './reducers/ethereum';
import pollingMiddleware from './middleware/polling';
import fundraiserMiddleware from './middleware/fundraiser';
import ethereumMiddleware from './middleware/ethereum';

import './sass/bulma.scss';

import Head from './components/head';
import NavBar from './components/navbar';
import Participate from './components/participate';
import Vote from './components/vote';
import History from './components/history';
import Help from './components/help';
import About from './components/about';
import Footer from './components/footer';

const history = createHistory();

const store = createStore(
  combineReducers({
    ethereum: reduceReducers(
      ethereumReducer,
      fundraiserReducer,
      pollingReducer
    ),
    toastr: toastrReducer,
    router: routerReducer
  }),
  composeWithDevTools(applyMiddleware(
    routerMiddleware(history),
    ethereumMiddleware,
    fundraiserMiddleware,
    pollingMiddleware
  ))
);

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

const AppContainer = () => (
  <ConnectedSwitch>
    <Route exact path={SEEDOM_PATH} component={Participate} />
    <Route path={`${SEEDOM_PATH}vote`} component={Vote} />
    <Route path={`${SEEDOM_PATH}history`} component={History} />
    <Route path={`${SEEDOM_PATH}help`} component={Help} />
    <Route path={`${SEEDOM_PATH}about`} component={About} />
  </ConnectedSwitch>
);

const App = connect(state => ({
  location: state.router.location,
}))(AppContainer);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-center"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
        />
        <Head />
        <NavBar />
        <App />
        <Footer />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
