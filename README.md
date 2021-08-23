# delivery_test
Interview Code Challenge Solution

##Problem
Find the shortest route (least number of stops) between 2 destinations by traveling from city to city through their 'neighbors'. You can only visit each city once and there will be 1-4 cities on lockdown. You cannot visit the lockdown cities.

##Setup
###To Run
Checkout the code and run `node index.js`.

###Run Tests
To run the tests use `yarn test`.

###Miscellaneous
The utils.js file will export `origAndDest` and `lockdownCities`. These will give you a random origin city and destination city and an array of random 1-4 lockdown cities. This is the default functionality when you run index.js.

##Rules
The cities you choose must be in the /inc/cities.js file.
A city can only be visited once.
Return the path with the least amount of stops.
