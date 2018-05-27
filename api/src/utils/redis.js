const redis = require('redis');
const { redisPort, redisHost } = require('../../config/redis');

if (process.env.REDISTOGO_URL) { // production
  redis.createClient(redisPort, redisHost);
} else { // development
  redis.createClient();
}
module.exports = redis;
