const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const objeto = {};
    species.forEach((specie) => {
      objeto[specie.name] = specie.residents.length;
    });
    return objeto;
  }
  if (!animal.sex) { // mentoria do Lucas me ajudou a definir isto
    const bixos = species.find((bixo) => bixo.name === animal.specie);
    return bixos.residents.length;
  }
  const quantidade = species.find((serVivo) => serVivo.name === animal.specie).filter(
    (cavalo) => cavalo.sex === animal.sex,
  );
  return quantidade.length;
}

module.exports = countAnimals;
