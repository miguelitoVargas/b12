// import helpers
import router from 'react-router';
import _ from 'lodash';
// Export Constants
export const SAVE_USER_LOGIN_INFO = 'SAVE_USER_LOGIN_INFO';

// Export Actions
//
export function saveUserLoginInfo(antform){

  const  payload = {
    uuid: _.split(antform.email, '@', 1),
    isUserLogged: true
  };
  console.log('inside saveuuid action', payload);
  return {
    type: SAVE_USER_LOGIN_INFO,
    payload: payload
  }
}
