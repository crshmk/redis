let redis = require('redis')

// https://www.npmjs.com/package/redis#rediscreateclient
let cache = redis.createClient()

module.exports = cache 