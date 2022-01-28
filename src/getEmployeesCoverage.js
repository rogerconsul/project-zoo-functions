const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(input) {
  if (!input) {
    const inputInvalido = employees.map((funcionario) => {
      const objetoResultado = {
        id: `${funcionario.id}`,
        fullName: `${funcionario.firstName} ${funcionario.lastName}`,
        species: Object.values(funcionario.responsibleFor)
          .map((id) => species.find((nome) => nome.id === id).name),
        locations: ['xablasu'],
      };
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
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
