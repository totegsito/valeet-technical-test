const express = require('express');
const auth = require('./auth');
const { getAllComics, getCharacterComics, getComicById } = require('./comics');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.post('/signup', auth.signUp);
router.post('/signin', auth.signIn);

router.get('/comics', getAllComics);
router.get('/comics/:comicId', getComicById);
router.get('/characters/:characterId/comics', getCharacterComics);

module.exports = router;
