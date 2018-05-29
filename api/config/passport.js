const { Strategy, ExtractJwt } = require('passport-jwt');

// load up the user model
const User = require('../src/models/user');
const { secret } = require('../config/database'); // get db config file

const passportStragety = (passport) => {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = secret;
  passport.use(new Strategy(opts, ((jwtPayload, done) => {
    User.findOne({
      _id: jwtPayload.id,
    }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    });
  })));
};

module.exports = passportStragety;
