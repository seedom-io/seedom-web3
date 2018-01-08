import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import blockchain from './modules/blockchain';

export const reducers = combineReducers({
  routing: routerReducer,
  blockchain
});
