import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { ConnectedRouter, StaticRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import ReduxToastr from 'react-redux-toastr'
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import reduceReducers from './utils/reduceReducers';
import pollingReducer from './reducers/polling';
import fundraiserReducer from './reducers/fundraiser';
import ethereumReducer from './reducers/ethereum';
import causeReducer from './reducers/cause';
import pollingMiddleware from './middleware/polling';
import fundraiserMiddleware from './middleware/fundraiser';
import ethereumMiddleware from './middleware/ethereum';
import causeMiddleware from './middleware/cause';

import './sass/bulma.scss';

import Head from './components/head';
import NavBar from './components/navbar';
import Footer from './components/footer';

import Hype from './components/hype';
import Participate from './components/participate';
import Vote from './components/vote';
import History from './components/history';
import Help from './components/help';
import About from './components/about';

const reducers = () => {
  return combineReducers({
    ethereum: reduceReducers(
      ethereumReducer,
      fundraiserReducer,
      pollingReducer,
      causeReducer
    ),
    toastr: toastrReducer,
    router: routerReducer
  });
};

const middlewares = (history) => {
  const values = [
    ethereumMiddleware,
    fundraiserMiddleware,
    pollingMiddleware,
    causeMiddleware
  ];

  if (history) {
    values.push(routerMiddleware(history));
  }

  return composeWithDevTools(applyMiddleware(...values));
};

const Routes = () => (
  <div>
    <Route exact path="/" component={Hype} />
    <Route path="/participate" component={Participate} />
    <Route path="/vote" component={Vote} />
    <Route path="/history" component={History} />
    <Route path="/help" component={Help} />
    <Route path="/about" component={About} />
  </div>
);

const Body = () => (
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
    <Routes />
    <Footer />
  </div>
);

const App = (store, history) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Body />
    </ConnectedRouter>
  </Provider>
);

const render = (request, state) => {
  const history = request
    ? createMemoryHistory({ initialEntries: [request.path] })
    : createBrowserHistory();

  const store = state ?
    createStore(
      reducers(),
      state,
      middlewares(history)
    ) :
    createStore(
      reducers(),
      middlewares()
    );

  const component = App(store, history);

  return {
    component,
    store
  };
};

export default render;
