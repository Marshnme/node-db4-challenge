
exports.up = function(knex) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingred_name', 255).notNullable();
        
    })
    .createTable('recipe', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.integer('ingredients_id').unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable('recipe-ingred', tbl => {
        tbl.increments();
        tbl.float(`quantity`);
        tbl.integer('step_number').unsigned()
        tbl.integer('recipe_id').unsigned()
        .references('id')
        .inTable('recipe')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
        tbl.integer('ingredients_id').unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex,Promise) {
    return knex.schema
    .dropTableIfExists('recipe-ingred')
    .dropTableIfExists('recipe')
    .dropTableIfExists('ingredients')
};
