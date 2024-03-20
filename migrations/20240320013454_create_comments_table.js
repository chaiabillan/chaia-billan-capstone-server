/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('Comments', function(table) {
        table.increments('comment_id').primary();
        table.string('username', 255);
        table.text('comment_text');
        table.timestamp('timestamp').defaultTo(knex.fn.now());
        table.integer('likes_count').defaultTo(0);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Comments');
};
