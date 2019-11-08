
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredient: 'milk'},
        {ingredient: 'cheese'},
        {ingredient: 'mac'},
        {ingredient: 'cereal'},
        {ingredient: 'bread'},
        {ingredient: 'pb'},
        {ingredient: 'jelly'},
      ]);
};
