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
import suggestReducer from './reducers/suggest';
import seedomReducer from './reducers/seedom';
import ethereumReducer from './reducers/ethereum';
import suggestMiddleware from './middleware/suggest';
import seedomMiddleware from './middleware/seedom';
import ethereumMiddleware from './middleware/ethereum';

import './sass/bulma.scss';

import Head from './components/head';
import Nav from './components/nav';
import Participate from './components/participate';
import Suggest from './components/suggest';
import History from './components/history';
import Help from './components/help';
import Footer from './components/footer';

const history = createHistory();

const store = createStore(
  combineReducers({
    ethereum: reduceReducers(
      ethereumReducer,
      seedomReducer,
      suggestReducer
    ),
    toastr: toastrReducer,
    router: routerReducer
  }),
  composeWithDevTools(applyMiddleware(
    routerMiddleware(history),
    ethereumMiddleware,
    seedomMiddleware,
    suggestMiddleware
  ))
);

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

const AppContainer = () => (
  <ConnectedSwitch>
    <Route exact path={ETH_PATH} component={Participate} />
    <Route path={`${ETH_PATH}suggest`} component={Suggest} />
    <Route path={`${ETH_PATH}history`} component={History} />
    <Route path={`${ETH_PATH}help`} component={Help} />
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
        <Nav />
        <App />
        <Footer />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
