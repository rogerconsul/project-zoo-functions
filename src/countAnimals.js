const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return
  }
  const bixos = species.map((bixo) => bixo.name === animal.name);
  return bixos.residents.length;
  console.log(bixos);
}

module.exports = countAnimals;
