import React from 'react';
import ReactDOM from 'react-dom';
import './sass/bulma.scss';

import App from './containers/App';

/* global document */
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <App />,
  MOUNT_NODE
);
