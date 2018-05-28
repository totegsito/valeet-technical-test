const redis = require('redis');
const { redisPort, redisHost } = require('../../config/redis');

const client = redis.createClient(redisPort, redisHost);

client.on('error', (err) => {
  console.error(`Error ${err}`);
});

module.exports = client;
