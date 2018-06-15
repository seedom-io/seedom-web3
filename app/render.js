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
import causesReducer from './reducers/causes';
import tickerReducer from './reducers/ticker';

import pollingMiddleware from './middleware/polling';
import fundraiserMiddleware from './middleware/fundraiser';
import ethereumMiddleware from './middleware/ethereum';
import causesMiddleware from './middleware/causes';
import tickerMiddleware from './middleware/ticker';

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
import Contact from './components/contact';
import PressRelease from './components/press-release';
import PressReleaseGraceRefugeeAid from './components/press-release/grace-refugee-aid';
import PressReleaseDonate4Refugees from './components/press-release/donate-4-refugees';

const reducers = () => {
  return combineReducers({
    ethereum: reduceReducers(
      ethereumReducer,
      fundraiserReducer,
      pollingReducer
    ),
    causes: causesReducer,
    ticker: tickerReducer,
    toastr: toastrReducer,
    router: routerReducer
  });
};

const middlewares = (history) => {
  const values = [
    ethereumMiddleware,
    fundraiserMiddleware,
    pollingMiddleware,
    causesMiddleware,
    tickerMiddleware
  ];

  if (history) {
    values.push(routerMiddleware(history));
  }

  return composeWithDevTools(applyMiddleware(...values));
};

const Routes = () => (
  <div>
    <Route exact path="/" component={Participate} />
    <Route path="/vote" component={Vote} />
    <Route path="/history" component={History} />
    <Route path="/help" component={Help} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/announce-beta-giveth" component={PressRelease} />
    <Route path="/announce-grace-refugee-aid" component={PressReleaseGraceRefugeeAid} />
    <Route path="/announce-donate-4-refugees" component={PressReleaseDonate4Refugees} />

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
    <NavBar />
    <Routes />
    <Footer />
  </div>
);

const Client = (store, history) => (
  <Provider store={store} suppressHydrationWarning>
    <ConnectedRouter history={history}>
      <div>
        <Head />
        <Body />
      </div>
    </ConnectedRouter>
  </Provider>
);

const Server = (store, history) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Head />
        <Route exact path="/" component={Hype} />
      </div>
    </ConnectedRouter>
  </Provider>
);

const render = (request, state) => {
  const history = request
    ? createMemoryHistory({ initialEntries: [request.url] })
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

  const component = state ? Client(store, history) : Server(store, history);

  return {
    component,
    store
  };
};

export default render;
