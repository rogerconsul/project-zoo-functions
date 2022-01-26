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
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
