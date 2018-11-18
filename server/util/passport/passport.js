const passport = require('passport');
const LocalStrategy = require('./localStrategy');
import User from '../../models/user';

passport.serializeUser((user, done) => {
  const id = (user.userInfo) ? user.userInfo.id : user.id;
  // console.log(id)
  done(null, id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(LocalStrategy);
module.exports = passport;
