const axios = require('axios');
const crypto = require('crypto');

const ts = new Date().getTime();

const { marvelSecretKey, marvelAPIKey, baseURL } = require('../../config/marvel');

const hash = crypto
  .createHash('md5')
  .update(`${ts}${marvelSecretKey}${marvelAPIKey}`)
  .digest('hex');

const baseParams = {
  ts,
  hash,
  limit: 10,
  apikey: marvelAPIKey,
};

const httpClientInstance = axios.create({
  baseURL,
  params: baseParams,
});

const get = (url, params) =>
  httpClientInstance.get(url, { params: { ...baseParams, ...params } });


module.exports = {
  get,
};
