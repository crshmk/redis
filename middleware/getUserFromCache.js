let cache = require('../redis')

module.exports = function getUserFromCache(req, res, next) {
  let { id } = req. params 

  // look for the value in the cache
  // https://redis.io/commands/get
  cache.get(`user:${id}`, (err, email) => {
    // if the user is in the cache, just send that
    if(email) {
      res.send(email)
    } else {
      next()
    }
  })

}
