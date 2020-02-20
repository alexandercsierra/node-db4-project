
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, description: 'boil water', recipe_id: 1},
        {id: 2, description: 'time pasta', recipe_id: 1},
        {id: 3, description: 'add cheese', recipe_id: 1},
        {id: 4, description: 'add butter', recipe_id: 2},
        {id: 5, description: 'make sandwich', recipe_id: 2},
        {id: 6, description: 'grill', recipe_id: 2}
      ]);
    });
};
