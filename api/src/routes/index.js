const express = require('express');
const auth = require('./auth');
const {
  isAuthenticated,
} = require('../middlewares/auth');

const { getAllComics, getCharacterComics, getComicById } = require('./comics');

const router = express.Router();

router.post('/signup', auth.signUp);
router.post('/signin', auth.signIn);

router.get('/comics', isAuthenticated(), getAllComics);
router.get('/comics/:comicId', isAuthenticated(), getComicById);
router.get('/characters/:characterId/comics', isAuthenticated(), getCharacterComics);

module.exports = router;
