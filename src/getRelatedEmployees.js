const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = ((id) => employees.some((emplo) => (
  emplo.managers.find((manager) => manager === id)
))
);

// O erro eu consegui resolver sozinho.
// A parte de retornar o array eu precisei da ajuda da sala de estudos. Acho que consegui entender :|
function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const responsavelPor = employees.filter((func) => func.managers.find(
    (gerente) => gerente === managerId,
  ));
  return responsavelPor.map((peao) => `${peao.firstName} ${peao.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
