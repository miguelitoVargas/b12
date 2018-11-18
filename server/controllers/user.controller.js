import User from '../models/user';
const passport = require('passport');

export function loginUser(req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) return next(err);
    if (user.userInfo) {
      req.logIn(user, function (err) {
        if (err) { return next(err); }
        return res.status(200).json(user);
      });
    }
    if (user.credentialsmsg) {
      return res.status(200).json(user);
    }
    if (user.nousrmsg) {
      return res.status(200).json(user);
    }
  })(req, res, next);
}
