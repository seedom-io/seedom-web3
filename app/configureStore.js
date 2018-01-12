import { compose, createStore, applyMiddleware } from 'redux';

import { reducers } from './redux/reducer';
import DevTools from './containers/DevTools';

// add the middlewares
const middlewares = [];

const enhancer = compose(
  applyMiddleware(...middlewares),
  DevTools.instrument()
);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/reactjs/redux/releases/tag/v3.1.0
  const store = createStore(reducers, initialState, enhancer);
  return store;
}
