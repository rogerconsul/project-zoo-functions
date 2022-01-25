const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const { species } = data;

function getSpeciesByIds(...ids) {
  const array = [];
  if (!ids) {
    return array;
  }
  const array2 = ids.map((id) => species.find((animal) => animal.id === id));
  return array2;
}
module.exports = getSpeciesByIds;
