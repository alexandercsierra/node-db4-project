const express = require('express');
const helmet = require('helmet');

const Recipes = require('./recipeModel');

const server = express();
server.use(helmet());
server.use(express.json());

server.get('/', (req, res)=>{
    res.status(200).json({message: 'Welcome to the Recipes API'})
})

//get all recipes
server.get('/recipes', (req, res)=>{
    Recipes.getRecipes()
        .then(recipes => res.status(200).json(recipes))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: err.message})
        })
})

//get shopping list
server.get('/:id/shop', (req, res)=>{
    Recipes.getShoppingList(req.params.id)
        .then(list=>res.status(200).json(list))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: err.message})
        })
})

//get the instructions for a recipe
server.get('/:id/instructions', (req, res)=>{
    Recipes.getInstructions(req.params.id)
        .then(instructions => res.status(200).json(instructions))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: err.message})
        })
})

//get all recipes that use a particular ingredient
server.get('/ingredients/:id/recipes', (req, res)=>{
    Recipes.getRecipesByIng(req.params.id)
        .then(recipes => res.status(200).json(recipes))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: err.message})
        })
})


module.exports = server