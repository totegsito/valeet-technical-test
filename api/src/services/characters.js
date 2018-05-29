const httpClient = require('../utils/httpClient');
const redisClient = require('../utils/redis');
const { takeWhatYouNeedFromAComicList } = require('../utils/comics');
const { takeWhatYouNeedFromACharacter } = require('../utils/characters');

const fetchCharacterById = (id, params) => new Promise((resolve, reject) => {
  redisClient.get(`${id}-character`, (err, comic) => {
    if (comic) {
      resolve(JSON.parse(comic));
    } else {
      httpClient.get(`characters/${id}`, params)
        .then((response) => {
          const { data } = response;
          const parsedData = takeWhatYouNeedFromACharacter(data);
          redisClient.setex(`${id}-character`, 60 * 60 * 24, JSON.stringify(parsedData));
          resolve(parsedData);
        })
        .catch(reject);
    }
  });
});

const fetchComicsByCharacterId = (characterId, params) => new Promise((resolve, reject) => {
  const { offset, limit } = params;
  redisClient.get(`${offset || 0}-${limit || 5}-${characterId}-comics`, (err, comics) => {
    if (comics) {
      resolve(JSON.parse(comics));
    } else {
      httpClient.get(`characters/${characterId}/comics`, {
        orderBy: 'title',
        formatType: 'comic',
        offset: params.offset || 0,
        limit: params.limit || 5,
      })
        .then((response) => {
          const { data } = response;
          const exposedData = takeWhatYouNeedFromAComicList(data);
          redisClient.setex(`${offset || 0}-${limit || 5}-${characterId}-comics`, 60 * 60 * 24, JSON.stringify(exposedData));
          resolve(exposedData);
        })
        .catch(reject);
    }
  });
});

module.exports = {
  fetchCharacterById,
  fetchComicsByCharacterId,
};
