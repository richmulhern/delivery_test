const {origAndDest, lockdownCities} = require('./inc/util.js');
const delivery = require('./inc/delivery.js');

console.log(delivery(origAndDest.orig, origAndDest.dest, lockdownCities));
