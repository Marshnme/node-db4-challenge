
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingred_name: 'milk'},
        {ingred_name: 'cheese'},
        {ingred_name: 'mac'},
        {ingred_name: 'cereal'},
        {ingred_name: 'bread'},
        {ingred_name: 'pb'},
        {ingred_name: 'jelly'},
      ]);
};
