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

UserSchema.pre('save', (next) => {
  const user = this;
  if (this.isModified('password') || this.isNew) {
    return bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
      return bcrypt.hash(user.password, salt, null, (hasHErr, hash) => {
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

UserSchema.methods.comparePassword = (passw, cb) => {
  bcrypt.compare(passw, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    }
    return cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
