var uniqueRandomArray = require('unique-random-array');
var spells = require('./spells.json');

module.exports = {
  all: spells,
  random: uniqueRandomArray(spells)
};
