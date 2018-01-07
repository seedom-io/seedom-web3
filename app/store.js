import { createStore, applyMiddleware } from 'redux';

import { reducers } from './redux/reducer';

// add the middlewares
const middlewares = [];

// apply the middleware
const middleware = applyMiddleware(...middlewares);

// create the store
const store = createStore(reducers, middleware);

export { store };
