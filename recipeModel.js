module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipesByIng
}

const db = require('./data/db-config');

function getRecipes(){
    return db('recipes');
}

function getShoppingList(id){
    return db('recipe_ingredients')
        .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
        .select('ingredients.name', 'ingredients.quantity', 'ingredients.unit')
        .where({recipe_id: id})
}

function getInstructions(id){
    return db('instructions').where({recipe_id: id});
}

function getRecipesByIng(id){
    return db('recipe_ingredients')
        .join('recipes', 'recipe_ingredients.recipe_id', 'recipes.id')
        .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
        .select('recipes.name as recipe', 'recipe_id', 'ingredients.name as ingredient', 'ingredient_id')
        .where({ingredient_id: id})
}