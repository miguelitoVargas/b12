const LocalStrategy = require('passport-local').Strategy;
import User from '../../models/user';

const strategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
    session: false,
  },
  function (req, email, password, done) {
    User.findOne({ email }, function (err, user) {
      if (!user || user === null) { return done(null, { nousrmsg: 'Parece que no estas registrado aun' }); }
      if (user) {
        if (email !== undefined) {
          if (!user.checkPassword(password)) { return done(null, { credentialsmsg: 'Por favor revisa tus datos' }); }
          return done(null, { userInfo: user });
        }
      }
    });
  }
);

module.exports = strategy;
