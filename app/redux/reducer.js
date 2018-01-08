import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import blockchain from './modules/blockchain';
import seedom from './modules/seedom';

export const reducers = combineReducers({
  routing: routerReducer,
  blockchain,
  seedom
});
