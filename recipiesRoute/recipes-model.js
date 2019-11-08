const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports={
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db.select('recipe.recipe_name').from('recipe');
}

function getShoppingList(recipe_id){
    return db.select('ingredients.ingredient','recipe-ingred.quantity')
    .from('recipe-ingred')
    .join('recipe', 'recipe.recipe_id', '=', 'recipe-ingred.recipe_id')
    .join('ingredients', 'ingredients.ingredient_id', '=', 'recipe-ingred.ingredients_id')
    .where('recipe-ingred.recipe_id' , '=', recipe_id);
}       

function getInstructions(recipe_id){
    return db.select('recipe.recipe_name', 'step_number', 'ingredients.ingredient', 'recipe-ingred.quantity')
    .from('recipe-ingred')
    .join('recipe', 'recipe.recipe_id' , '=', 'recipe-ingred.recipe_id')
    .join('ingredients', 'ingredients.ingredient_id', '=', 'recipe-ingred.ingredients_id')
    .where('recipe-ingred.recipe_id' , '=', recipe_id ).orderBy('step_number');
}