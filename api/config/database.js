module.exports = {
  host: process.env.MONGO_HOST || 'localhost',
  port: process.env.MONGO_PORT || 27017,
  name: process.env.MONGO_DBNAME || 'valeet-test',
  secret: process.env.MONGO_SECRET || 'WhySoSerious',
  get databaseURL() {
    return `mongodb://${this.host}:${this.port}/${this.name}`;
  },
};
