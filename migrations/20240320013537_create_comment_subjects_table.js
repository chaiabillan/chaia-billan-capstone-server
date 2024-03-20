/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('CommentSubjects', function(table) {
        table.integer('comment_id').unsigned();
        table.foreign('comment_id').references('Comments.comment_id');
        table.integer('subject_id').unsigned();
        table.foreign('subject_id').references('Subjects.subject_id');
        table.primary(['comment_id', 'subject_id']);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('CommentSubjects');
};

