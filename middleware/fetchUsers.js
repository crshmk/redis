let fetch = require('node-fetch')
let cache = require('../redis')

let usersUrl = 'https://jsonplaceholder.typicode.com/users/'

let makeUrl = id => usersUrl + id

module.exports = async function fetchUsers(req, res) {
  try {
    console.log('performing a fetch')
    let { id } = req. params 
    let url = makeUrl(id)
    let user = await fetch(url).then(data => data.json())
    res.send(user.email)
    // put the email in the cache
    //https://redis.io/commands/set
    cache.set(`user:${id}`, user.email)

  } catch(err) {
    console.log(err)
    res.status(500).send('check the fetch')
  }
}