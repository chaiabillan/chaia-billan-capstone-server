/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('CommentSubjects').del();
  await knex('CommentSubjects').insert([
    { comment_id: 9, subject_id: 1 }, // Emily's comment pertains to "Eating at Restaurants"
    { comment_id: 9, subject_id: 5 }, // Emily's comment pertains to "Language Barriers"
    { comment_id: 9, subject_id: 7 }, // Emily's comment pertains to "Travel Tips"
    // { comment_id: 9, subject_id: 7 }, // Emily's comment pertains to "External Resources"
    { comment_id: 10, subject_id: 2 }, // Daniel's comment pertains to "Emergencies"
    { comment_id: 10, subject_id: 7 }, // Daniel's comment pertains to "Travel Tips"
    { comment_id: 11, subject_id: 1 }, // Sophia's comment pertains to "Eating at Restaurants"
    { comment_id: 11, subject_id: 3 }, // Sophia's comment pertains to "General Advice"
    { comment_id: 12, subject_id: 5 }, // Liam's comment pertains to "Language Barriers"
    { comment_id: 12, subject_id: 3 }, // Liam's comment pertains to "General Advice"
    { comment_id: 13, subject_id: 6 }, // Olivia's comment pertains to "Cultural Considerations"
    { comment_id: 13, subject_id: 3 }, // Olivia's comment pertains to "General Advice"
    { comment_id: 14, subject_id: 2 }, // Mason's comment pertains to "Cross-Contamination Awareness"
    { comment_id: 14, subject_id: 3 }, // Mason's comment pertains to "General Advice"
    { comment_id: 15, subject_id: 7 }, // Ava's comment pertains to "Emergency Preparedness"
    { comment_id: 15, subject_id: 3 }, // Ava's comment pertains to "Travel Tips"
    { comment_id: 16, subject_id: 4 }, // Ethan's comment pertains to "Easy Meal Ideas"
    { comment_id: 16, subject_id: 3 }, // Ethan's comment pertains to "General Advice"
  ]);
};
