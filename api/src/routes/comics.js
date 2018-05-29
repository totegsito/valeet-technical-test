const {
  fetchAllComics,
  fetchComicById,
} = require('../services/comics');

const getAllComics = (req, res) => {
  const { query } = req;
  const { offset, limit, fields } = query;
  fetchAllComics({ offset, limit, fields })
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

const getComicById = (req, res) => {
  const { comicId } = req.params;
  fetchComicById(comicId)
    .then(comic => res.json({
      success: true,
      ...comic,
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
  getAllComics,
  getComicById,
};
