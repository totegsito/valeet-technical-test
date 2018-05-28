const httpClient = require('../utils/httpClient');
const redisClient = require('../utils/redis');

const getAllComics = params => new Promise((resolve, reject) => {
  const { offset } = params;
  redisClient.get(`${offset || 0}-all-comics`, (err, comics) => {
    if (comics) {
      resolve(JSON.parse(comics));
    } else {
      httpClient.get('/comics', { orderBy: 'title', formatType: 'comic', ...params })
        .then((response) => {
          const { data } = response;
          redisClient.setex(`${offset}-all-comics`, 60 * 60 * 24, JSON.stringify(data));
          resolve(data);
        })
        .catch(reject);
    }
  });
});

const getComicById = (id, params) => new Promise((resolve, reject) => {
  redisClient.get(`${id}-comic`, (err, comic) => {
    if (comic) {
      resolve(JSON.parse(comic));
    } else {
      httpClient.get(`/comics/${id}`, params)
        .then((response) => {
          const { data } = response;
          redisClient.setex(`${id}-comic`, 60 * 60 * 24, JSON.stringify(data));
          resolve(data);
        })
        .catch(reject);
    }
  });
});

module.exports = {
  getAllComics,
  getComicById,
};
