
exports.up = function(knex) {
    //recipes table with name and id
  return knex.schema.createTable('recipes', tbl=>{
      tbl.increments();
      tbl.string('name', 255).notNullable().unique();
  })

  //ingredients table with id, name, quantity, unit
  .createTable('ingredients', tbl=>{
      tbl.increments();
      tbl.string('name', 255).notNullable().unique();
      tbl.float('quantity');
      tbl.string('unit', 255).notNullable();
  })

  //instructions table with id, description, and associated recipe_id
  .createTable('instructions', tbl=>{
      tbl.increments();
      tbl.string('description', 255).notNullable();
      
      //foreign key
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

  })

  .createTable('recipe_ingredients', tbl=>{
      tbl.primary(['recipe_id', 'ingredient_id'])

      //foreign keys
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
