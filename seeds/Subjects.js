/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('Subjects').del();
  
    // Inserts seed entries
    await knex('Subjects').insert([
      { subject_name: 'Eating at Restaurants' },
      { subject_name: 'Emergencies' },
      { subject_name: 'General Advice' },
      { subject_name: 'Easy Meal Ideas' },
      { subject_name: 'Language Barriers' },
      { subject_name: 'Cultural Considerations' },
      { subject_name: 'Emergency Preparedness' },
    ]);
  };
  