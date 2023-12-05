const Redis = require("ioredis")

const redisClient = new Redis({
    port: 6379,
    host: 'localhost',
    maxRetriesPerRequest: 1,
    connectTimeout: 5000,
    commandTimeout: 2000,
    tls: true,
});

module.exports = redisClient