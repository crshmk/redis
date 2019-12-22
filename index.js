let express = require('express')
let bodyParser = require('body-parser')

let getUserFromCache = require('./middleware/getUserFromCache')
let fetchUsers = require('./middleware/fetchUsers')

let app = express()
app.use(bodyParser.json())

app.get('/users/:id', getUserFromCache, fetchUsers)

app.listen(3000, () => {
  console.log('at 3000')
})