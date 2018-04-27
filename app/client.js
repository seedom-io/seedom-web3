import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import render from './render';

// Grab the state from a global variable injected into the server-generated HTML
const state = window.__STATE__;
// Allow the passed state to be garbage-collected
delete window.__STATE__;
// Create Redux store with initial state
const rendered = render(null, state);

hydrate(
  rendered.component,
  document.getElementById('root')
);
