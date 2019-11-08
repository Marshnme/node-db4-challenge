
exports.seed = function(knex) {
      return knex('recipe').insert([
        {name: 'bowl of cereal', ingredients_id:4},
        {name: 'macncheese',  ingredients_id:2},
        {name: 'pb&j', ingredients_id:1}
      ]);
    };




    