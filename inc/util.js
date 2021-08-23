const {cities} = require('./cities.js');

const getOriginAndDest = (cities) => {
    let orig = '';
    let dest = '';
    const numCities = cities.length;

    while (orig == dest) {
        const origCity = getRandomCity(cities.length);
        const destCity = getRandomCity(cities.length);

        orig = cities[origCity].name;
        dest = cities[destCity].name;
    }

    return {'orig': orig, 'dest': dest}
}

const getLockdownCities = (cities, origAndDest) => {
    const numLocked = Math.ceil(Math.random() * 4);

    let lockedCities = [];

    while (lockedCities.length < numLocked) {
        const cityNum = getRandomCity(cities.length);
        const city = cities[cityNum].name;

        // Make sure the city isn't in lockdown twice and do not lockedown orig or dest city
        if (!lockedCities.includes(city) && origAndDest.orig !== city && origAndDest.dest !== city) {
            lockedCities.push(city);
        }
    }

    return lockedCities;
}

const getRandomCity = (length) => {
    return Math.floor(Math.random() * length);
}

const origAndDest = getOriginAndDest(cities);
const lockdownCities = getLockdownCities(cities, origAndDest);

module.exports = {
    origAndDest,
    lockdownCities
}