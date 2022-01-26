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
  } // agradecimentos especiais ao Joao Kruschewsky que me ajudou na sala de estudos a entender como trabalhar o array
  const serVivos = species.find((serVivo) => serVivo.name === animal.specie).residents;
  const teste = serVivos.filter((sexo) => sexo.sex === animal.sex);

  return teste.length;
}
module.exports = countAnimals;
