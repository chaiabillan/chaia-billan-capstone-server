/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Replies', function(table) {
        table.increments('reply_id').primary();
        table.integer('comment_id').unsigned();
        table.foreign('comment_id').references('Comments.comment_id');
        table.string('username', 255);
        table.text('reply_text');
        table.timestamp('timestamp').defaultTo(knex.fn.now());
        table.integer('likes_count').defaultTo(0);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Replies');
};