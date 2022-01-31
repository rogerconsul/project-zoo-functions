const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function inputInvalido(input) {
  if (!input) {
    const invalido = employees.map((funcionario) => {
      const objetoResultado = {
        id: `${funcionario.id}`,
        fullName: `${funcionario.firstName} ${funcionario.lastName}`,
        species: Object.values(funcionario.responsibleFor)
          .map((id) => species.find((nome) => nome.id === id).name),
        locations: ['xablasu'],
      };
      return objetoResultado;
    });
    return invalido;
  }
}

function inputValido(input) {
  if (input) {
    const descobrePeao = employees.find((peao) => peao.id === input.id || peao
      .firstName === input.name || peao.lastName === input.name);
    return {
      id: `${descobrePeao.id}`,
      fullName: `${descobrePeao.firstName} ${descobrePeao.lastName}`,
      species: Object.values(descobrePeao.responsibleFor)
        .map((id) => species.find((nome) => nome.id === id).name),
      locations: ['xablasu'],
    };
  }
}

function getEmployeesCoverage(input) {
  if (!input) {
    return inputInvalido(input);
  }
  if (input) {
    return inputValido(input);
  }
}

// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
