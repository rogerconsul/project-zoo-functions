const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const bixo = species.find((specie) => specie.name === animal);
  return bixo.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
