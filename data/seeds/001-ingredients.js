
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'cheese', quantity: 2, unit: 'cups'},
        {id: 2, name: 'bread', quantity: 2, unit: 'slices'},
        {id: 3, name: 'butter', quantity: 3, unit: 'tbsps'},
        {id: 4, name: 'pasta', quantity: 1.5, unit: 'cups'}
      ]);
    });
};
