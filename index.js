const {cities} = require('./inc/cities.js');
const {origAndDest, lockdownCities} = require('./inc/util.js');

function delivery(orig, dest, lockdowns = [], visited = [], stops = 0) {
    if (stops === 0) {
        console.log(`Attempting to get from ${orig} to ${dest}`);
        if (lockdowns.length !== 0) {
            console.log(`The following cities are on lockdown: ${lockdowns}`);
        }
    }

    visited.push(orig);

    let myStops = stops + 1;
    let totalStops = cities.length;
    let neighborsVisited = 0;

    const city = cities.find((el) => {
        return el.name == orig
    });

    if (city.neighbors.includes(dest)) {
        return myStops;
    }

    city.neighbors.forEach((neighbor) => {
        if (!visited.includes(neighbor) && !lockdowns.includes(neighbor)) {
            numStops = delivery(neighbor, dest, lockdowns, visited, myStops);
            neighborsVisited = neighborsVisited + 1;
        }

        if (neighborsVisited == 0 || numStops == false) {
            return false;
        }

        if (numStops < totalStops) {
            totalStops = numStops;
        }
    });

    if (totalStops == 12) {
        return false;
    }

    return totalStops;
}

console.log(delivery(origAndDest.orig, origAndDest.dest, lockdownCities));

module.exports = delivery;