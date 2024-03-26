/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('countries', function(table) {
        table.increments('id').primary();
        table.string('country_name');
        table.string('country_code', 5);
        table.string('ambulance_phone', 20);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('countries');
};
