const passport = require('passport');
const config = require('../../config/database');
require('../../config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const User = require('../models/user');


router.post('/signup', (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.json({
      success: false,
      msg: 'Please pass username and password.',
    });
  } else {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
    });
    // save the user
    newUser.save((err) => {
      if (err) {
        return res.json({
          success: false,
          msg: 'Username already exists.',
        });
      }
      return res.json({
        success: true,
        msg: 'Successful created new user.',
      });
    });
  }
});

router.post('/login', (req, res) => {
  User.findOne({
    username: req.body.username,
  }, (err, user) => {
    if (err) throw err;

    if (!user) {
      return res.status(401).send({
        success: false,
        msg: 'Authentication failed. User not found.',
      });
    }
    // check if password matches
    return user.comparePassword(req.body.password, (passwordErr, isMatch) => {
      if (!isMatch || passwordErr) {
        return res.status(401).send({
          success: false,
          msg: 'Authentication failed. Wrong password.',
        });
      }
      // if user is found and password is right create a token
      const token = jwt.sign(user, config.secret);
      // return the information including token as JSON
      return res.json({
        success: true,
        token: `JWT ${token}`,
      });
    });
  });
});

module.exports = router;
