// Import Actions

import { SAVE_USER_LOGIN_INFO } from './LoginActions';

// Initial State
const initialState = {userLoginInfo: {uuid: '', userIsLogged: false}};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {

    case SAVE_USER_LOGIN_INFO:
      console.log('feck reducer', action.payload);
    return action.payload;

    default:
      return state;
  }
};

export default LoginReducer;
