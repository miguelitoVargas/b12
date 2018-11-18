import callApi from '../../util/apiCaller';

// Export Constants

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
