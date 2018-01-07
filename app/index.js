import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from "./store.js";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './containers/App';

const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE
);