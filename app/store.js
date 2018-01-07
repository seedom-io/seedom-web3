import { createStore, applyMiddleware, compose } from "redux";

import { reducers } from "./reducers/index";

// add the middlewares
let middlewares = [];

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// create the store
const store = createStore(reducers, middleware);

export { store, history };