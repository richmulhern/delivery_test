const { expect, test } = require('@jest/globals');
const delivery = require('../index.js');

test('A delivery can get to a neighboring city', () => {
    expect(delivery('Philadelphia', 'New York')).toBe(1);
});

test('Get to a city that is not a neighbor', () => {
    expect(delivery('New York', 'Washington D.C.')).toBe(2);
});

test('Returns the least number of stops', () => {
    expect(delivery('Canton', 'New York')).toBe(3);
})

test('Verify it goes around a city in lockdown', () => {
    expect(delivery('Buffalo', 'Washington D.C.', ['New York'])).toBe(4);
});

test('Verify it returns false if path is blocked', () => {
    expect(delivery('Chicago', 'Washington D.C.', ['Canton'])).toBe(false);
});