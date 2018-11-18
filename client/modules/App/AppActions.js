// Export Constants
import callApi from '../../util/apiCaller';
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
export const SIGNIN_MSG = 'SIGNIN_MSG';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function userAuth(user) {
  return {
    type: FETCH_CURRENT_USER,
    payload: user,
  };
}
export function sendMsgSignin(msg) {
  return {
    type: SIGNIN_MSG,
    payload: msg,
  };
}
export const fetchCurrentUser = () => {
  return (dispatch) => {
    return callApi('current_user').then(res => dispatch(userAuth(res)));
  };
};

export function validateUser(user) {
  return (dispatch) => {
    return callApi('login', 'post', {
      email: user.email,
      password: user.password,
    }).then(res => {
      if (res.nousrmsg || res.credentialsmsg) {
        dispatch(sendMsgSignin(res));
      }
      if (res.userInfo) {
        dispatch(userAuth(res));
      }
    });
  };
}
