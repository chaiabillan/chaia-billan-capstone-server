/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Subjects', function(table) {
        table.increments('subject_id').primary();
        table.string('subject_name', 255).unique();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Subjects');
};

