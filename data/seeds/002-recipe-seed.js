
exports.seed = function(knex) {
      return knex('recipe').insert([
        {recipe_name: 'bowl of cereal', ingredients_id:4},
        {recipe_name: 'macncheese',  ingredients_id:2},
        {recipe_name: 'pb&j', ingredients_id:1}
      ]);
    };




    