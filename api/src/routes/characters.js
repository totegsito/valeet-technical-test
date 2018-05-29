const {
  fetchCharacterById,
  fetchComicsByCharacterId,
} = require('../services/characters');

const getComicsByCharacterId = (req, res) => {
  const { query, params } = req;
  const { characterId } = params;
  const { offset, limit } = query;
  fetchComicsByCharacterId(characterId, { offset, limit })
    .then(comics => res.json({
      success: true,
      ...comics,
    }))
    .catch(err => res.status(404).json({
      success: false,
      msg: (
        err.response &&
        err.response.data &&
        err.response.data.message
      ) || err.msg,
    }));
};

const getCharacterById = (req, res) => {
  const { characterId } = req.params;
  fetchCharacterById(characterId)
    .then(character => res.json({
      success: true,
      ...character,
    }))
    .catch(err => res.status(404).json({
      success: false,
      msg: (
        err.response &&
        err.response.data &&
        err.response.data.message
      ) || err.msg,
    }));
};


module.exports = {
  getCharacterById,
  getComicsByCharacterId,
};
