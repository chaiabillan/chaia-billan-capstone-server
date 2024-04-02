/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('Subjects').del();
  
    // Inserts seed entries
    await knex('Subjects').insert([
      { subject_id: 1, subject_name: 'Eating at Restaurants' },
      { subject_id: 2, subject_name: 'Emergencies' },
      { subject_id: 3, subject_name: 'General Advice' },
      { subject_id: 4, subject_name: 'Easy Meal Ideas' },
      { subject_id: 5, subject_name: 'Language Barriers' },
      { subject_id: 6, subject_name: 'Cultural Considerations' },
      { subject_id: 7, subject_name: 'Emergency Preparedness' },
    ]);
  };
  