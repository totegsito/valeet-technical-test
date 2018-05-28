const axios = require('axios');
const crypto = require('crypto');
const qs = require('qs');

const ts = new Date().getTime();

const { marvelSecretKey, marvelAPIKey, baseURL } = require('../../config/marvel');

const hash = crypto
  .createHash('md5')
  .update(`${ts}${marvelSecretKey}${marvelAPIKey}`)
  .digest('hex');

const baseParams = {
  ts,
  hash,
  limit: 20,
};

const httpClientInstance = axios.create({
  baseURL,
  params: qs.baseParams,
});

const get = (url, params) =>
  httpClientInstance.get(url, { params: qs.stringify({ ...baseParams, params }) });


module.exports = get;
