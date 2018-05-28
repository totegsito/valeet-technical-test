const redis = require('redis');
const { redisPort, redisHost } = require('../../config/redis');

redis.createClient(redisPort, redisHost);

module.exports = redis;
