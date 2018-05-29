const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// eslint-disable-next-line func-names
UserSchema.pre('save', function (next) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
    return bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
      return bcrypt.hash(user.password, salt, null, (hasHErr, hash) => {
        console.log(hasHErr);
        if (hasHErr) {
          return next(hasHErr);
        }
        user.password = hash;
        return next();
      });
    });
  }
  return next();
});

// eslint-disable-next-line func-names
UserSchema.methods.comparePassword = function (passw, cb) {
  // eslint-disable-next-line func-names,prefer-arrow-callback
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    return cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
