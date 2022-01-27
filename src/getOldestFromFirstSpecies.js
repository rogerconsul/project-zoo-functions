const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const capturaAnimalId = employees.find((funcionario) => funcionario.id === id).responsibleFor[0];

  const capturaArray = species.find((objeto) => objeto.id === capturaAnimalId).residents.sort(
    (animalA, animalB) => animalB.age - animalA.age,
  )[0]; // Grande Gean ajudou a reduzir o codigo ao inserir o index diretamente aqui.

  return Object.values(capturaArray);
}

module.exports = getOldestFromFirstSpecies;
