const http = require('../utils/httpClient');

const getAllCharacters = params => http.get('/comics', params);
const getComicById = (id, params) => http.get(`/comics/${id}`, params);

module.exports = {
  getAllCharacters,
  getComicById,
};
