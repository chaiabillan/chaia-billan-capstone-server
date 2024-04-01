exports.up = function(knex) {
    return knex.schema.createTable('emails', function(table) {
        table.increments('email_id').primary();
        table.string('email_address').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('emails');
};
