import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import './sass/bulma.scss';

import App from './containers/App';
import './index.scss';

/* global document */
const MOUNT_NODE = document.getElementById('root');

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE
);
