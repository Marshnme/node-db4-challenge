
exports.seed = function(knex) {
return knex('recipe-ingred').insert([
        {recipe_id: 1, step_number:1, ingredients_id:4,quantity: 5},
        {recipe_id: 1, step_number:2, ingredients_id:1,quantity: 3},
        {recipe_id: 2, step_number:1, ingredients_id:3,quantity: 5},
        {recipe_id: 2, step_number:2, ingredients_id:1,quantity: 3},
        {recipe_id: 2, step_number:3, ingredients_id:2,quantity: 2}
      ]);
    };