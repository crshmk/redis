# Redis example 
#### Grabs an user [here](https://jsonplaceholder.typicode.com/users/). Only the first request for any user is fetched; subsequent requests are returned from the Redis cache. (This example just sends the email address.)

##### Steps:

* Install Redis
```sh
brew install redis
```

* Run the daemon 
```sh
redis-server
```

* Head to the project and npm start 

* Hit `localhost:3000/users/1`
> the initial request should take a little time (say 150ms)  
> subsequent requests should be immediate (1ms)

* Change the user id, e.g. `localhost:3000/users/2`
> the initial request again takes time; subsequent are immediate


