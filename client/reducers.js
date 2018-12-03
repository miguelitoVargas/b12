/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import customers from './modules/Clients/ClientsReducer';
import intl from './modules/Intl/IntlReducer';
import userLoginInfo from './modules/Login/LoginReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  customers,
  intl,
  userLoginInfo,
});
