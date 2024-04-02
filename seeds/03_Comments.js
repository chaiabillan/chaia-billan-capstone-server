exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('Comments').del();
  await knex('Comments').insert([
    {
      comment_id: 9,
      username: 'Emily',
      comment_text: 'When dining out abroad, I always carry allergy translation cards. I created mine using the free templates available on foodallergy.org.',
      likes_count: 10,
      timestamp: '2022-03-10 08:00:00',
    },
    {
      comment_id: 10,
      username: 'Daniel',
      comment_text: 'I recently had an allergic reaction while traveling, and having travel-sized antihistamines saved the day! Always carry your medications with you.',
      likes_count: 15,
      timestamp: '2022-03-12 14:30:00',
    },
    {
      comment_id: 11,
      username: 'Sophia',
      comment_text: 'Does anyone have tips for finding allergy-friendly restaurants in foreign countries?',
      likes_count: 7,
      timestamp: '2022-03-11 10:45:00',
    },
    {
      comment_id: 12,
      username: 'Liam',
      comment_text: 'In my experience, language barriers can be challenging, but using translation apps and learning a few key phrases can help tremendously.',
      likes_count: 12,
      timestamp: '2022-03-13 09:20:00',
    },
    {
      comment_id: 13,
      username: 'Olivia',
      comment_text: 'Cultural awareness is key! Researching local cuisines and common allergens can prevent unpleasant surprises while traveling.',
      likes_count: 18,
      timestamp: '2022-03-14 16:00:00',
    },
    {
      comment_id: 14,
      username: 'Mason',
      comment_text: 'How do you navigate cross-contamination concerns when dining out in areas with less stringent food safety regulations?',
      likes_count: 5,
      timestamp: '2022-03-15 12:10:00',
    },
    {
      comment_id: 15,
      username: 'Ava',
      comment_text: 'I always pack an allergy emergency kit with me when traveling, including medications, antihistamines, and epinephrine auto-injectors.',
      likes_count: 20,
      timestamp: '2022-03-16 07:55:00',
    },
    {
      comment_id: 16,
      username: 'Ethan',
      comment_text: 'Does anyone have recommendations for easy-to-make allergy-friendly meals while on the go?',
      likes_count: 9,
      timestamp: '2022-03-17 11:40:00',
    }
  ]);
};
