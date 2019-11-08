const db = require('../data/recipedb.db3');

module.exports={
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db.select('recipe.name').from('recipe');
}

function getShoppingList(recipe_id){
    return db.select('ingredients.ingred_name','recipe-ingred.quantity')
    .from('recipe-ingred')
    .join('recipe', 'recipe-ingred.recipe_id', '=', 'recipe.id')
    .join('ingredients', 'recipe-ingred.ingredients_id', '=', 'ingredients.id')
    .where(recipe_id , '=', 'recipe.id');
}       

function getInstructions(recipe_id){
    return db.select('recipe.name', 'step_number', 'ingredients.ingred_name', 'recipe-ingred.quantity')
    .from('recipe-ingred')
    .join('recipe', 'recipe-ingred.recipe_id', '=', 'recipe.id')
    .join('ingredients', 'recipe-ingred.ingredients_id', '=', 'ingredients.id')
    .where(recipe_id , '=', 'recipe.id');
}