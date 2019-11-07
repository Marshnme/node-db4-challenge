
exports.up = function(knex) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.float(`quantity`).notNullable();
    })
    .createTable('recipe', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.float(`quantity`).notNullable();
        tbl.integer('ingredients_id').unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CACADE');
    })
    
};

exports.down = function(knex) {
  
};
