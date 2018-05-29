const express = require('express');
const auth = require('./auth');
const {
  isAuthenticated,
} = require('../middlewares/auth');

const {
  getAllComics,
  getComicById,
} = require('./comics');

const {
  getCharacterById,
  getComicsByCharacterId,
} = require('./characters');

const router = express.Router();

router.post('/signup', auth.signUp);
router.post('/signin', auth.signIn);

router.get('/comics', isAuthenticated(), getAllComics);
router.get('/comics/:comicId', isAuthenticated(), getComicById);
router.get('/characters/:characterId', isAuthenticated(), getCharacterById);
router.get('/characters/:characterId/comics', isAuthenticated(), getComicsByCharacterId);

module.exports = router;
