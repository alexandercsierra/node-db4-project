
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Macaroni and Cheese'},
        {id: 2, name: 'Grilled Cheese'}
      ]);
    });
};
