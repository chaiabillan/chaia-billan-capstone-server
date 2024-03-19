/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('Comments').del();
    await knex('Comments').insert([
      {
        username: 'Emily',
        comment_text: 'When dining out abroad, I always carry allergy translation cards. I created mine using the free templates available on foodallergy.org.'
      },
      {
        username: 'Daniel',
        comment_text: 'I recently had an allergic reaction while traveling, and having travel-sized antihistamines saved the day! Always carry your medications with you.'
      },
      {
        username: 'Sophia',
        comment_text: 'Does anyone have tips for finding allergy-friendly restaurants in foreign countries?'
      },
      {
        username: 'Liam',
        comment_text: 'In my experience, language barriers can be challenging, but using translation apps and learning a few key phrases can help tremendously.'
      },
      {
        username: 'Olivia',
        comment_text: 'Cultural awareness is key! Researching local cuisines and common allergens can prevent unpleasant surprises while traveling.'
      },
      {
        username: 'Mason',
        comment_text: 'How do you navigate cross-contamination concerns when dining out in areas with less stringent food safety regulations?'
      },
      {
        username: 'Ava',
        comment_text: 'I always pack an allergy emergency kit with me when traveling, including medications, antihistamines, and epinephrine auto-injectors.'
      },
      {
        username: 'Ethan',
        comment_text: 'Does anyone have recommendations for easy-to-make allergy-friendly meals while on the go?'
      }
    ]);
  };
  