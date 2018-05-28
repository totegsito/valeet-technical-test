const express = require('express');
const auth = require('./auth');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.post('/signup', auth.signUp);
router.post('/signin', auth.signIn);

module.exports = router;
