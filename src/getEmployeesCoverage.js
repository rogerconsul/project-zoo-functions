const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(input) {
  if (!input) {
    const objetoResultado = {};
    const inputInvalido = employees.map((funcionario) => {
      objetoResultado.id = `${funcionario.id}`;
      objetoResultado.fullName = `${funcionario.firstName} ${funcionario.lastName}`;
      objetoResultado.species = [`${Object.values(funcionario.responsibleFor)}`];
      objetoResultado.locations = ['xablasu'];
      return objetoResultado;
    });
    return inputInvalido;
  }

  if (input) {
    const descobrePeao = employees.find((peao) => peao.id === input.id || peao
      .firstName === input.name || peao.lastName === input.name);
    return descobrePeao;
  }
}

console.log(getEmployeesCoverage());
console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
