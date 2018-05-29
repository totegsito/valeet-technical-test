const httpClient = require('../utils/httpClient');
const redisClient = require('../utils/redis');
const { takeWhatYouNeedFromAComic, takeWhatYouNeedFromAComicList } = require('../utils/comics');


const fetchAllComics = params => new Promise((resolve, reject) => {
  const { offset, limit } = params;
  redisClient.get(`${offset || 0}-${limit || 10}-all-comics`, (err, comics) => {
    if (comics) {
      resolve(JSON.parse(comics));
    } else {
      httpClient.get('comics', { orderBy: 'title', formatType: 'comic', ...params })
        .then((response) => {
          const { data } = response;
          const exposedData = takeWhatYouNeedFromAComicList(data);
          redisClient.setex(`${offset || 0}-${limit || 10}-all-comics`, 60 * 60 * 24, JSON.stringify(exposedData));
          resolve(exposedData);
        })
        .catch(reject);
    }
  });
});


const fetchComicById = (id, params) => new Promise((resolve, reject) => {
  redisClient.get(`${id}-comic`, (err, comic) => {
    if (comic) {
      resolve(JSON.parse(comic));
    } else {
      httpClient.get(`comics/${id}`, params)
        .then((response) => {
          const { data } = response;
          const parsedData = takeWhatYouNeedFromAComic(data);
          redisClient.setex(`${id}-comic`, 60 * 60 * 24, JSON.stringify(parsedData));
          resolve(parsedData);
        })
        .catch(reject);
    }
  });
});

module.exports = {
  fetchAllComics,
  fetchComicById,
};
