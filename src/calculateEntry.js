const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const pessoas = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  pessoas.child = entrants.filter((entrant) =>
    entrant.age < 18).length; // ideia do length veio da sala 1, onde me lembraram que o filter retorna array.

  pessoas.adult = entrants.filter((entrant) =>
    entrant.age >= 18 && entrant.age < 50).length;

  pessoas.senior = entrants.filter((entrant) =>
    entrant.age >= 50).length;

  return pessoas;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { // Agradecimentos ao Isaac por ter dado a dica do object.keys
    return 0;
  }
}
const asd = {};

console.log(asd.length);

module.exports = { calculateEntry, countEntrants };
