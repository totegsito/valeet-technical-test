const passport = require('passport');
require('../../config/passport')(passport);

const isAuthenticated = () => passport.authenticate('jwt', { session: false });

module.exports = {
  isAuthenticated,
};
