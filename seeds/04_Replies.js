/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('Replies').del();
    await knex('Replies').insert([
        {
            comment_id: 9,
            username: 'Sarah',
            reply_text: 'Translation cards are a lifesaver! I use them too.',
            likes_count: 2,
            timestamp: '2022-03-10 08:30:00' // Slightly after Emily's comment
        },
        {
            comment_id: 9,
            username: 'Michael',
            reply_text: 'Thanks for sharing! I\'ll definitely check out those templates.',
            timestamp: '2022-03-10 09:00:00' // Shortly after Sarah's reply
        },
        {
            comment_id: 10,
            username: 'Grace',
            reply_text: 'That must have been scary! I always carry antihistamines with me too.',
            likes_count: 1,
            timestamp: '2022-03-12 15:00:00' // Shortly after Daniel's comment
        },
        {
            comment_id: 11,
            username: 'Sophie',
            reply_text: 'I use apps like Yelp and AllergyEats to find allergy-friendly restaurants.',
            timestamp: '2022-03-11 11:00:00' // Shortly after Sophia's comment
        },
        {
            comment_id: 12,
            username: 'Emma',
            reply_text: 'Learning basic phrases like "I have a food allergy" can be really helpful.',
            timestamp: '2022-03-13 09:40:00' // Shortly after Liam's comment
        },
        {
            comment_id: 14,
            username: 'Noah',
            reply_text: 'I try to communicate with the staff and chef about my allergies.',
            timestamp: '2022-03-15 12:30:00' // Shortly after Mason's comment
        },
        {
            comment_id: 15,
            username: 'Isabella',
            reply_text: 'That sounds like a smart idea! Being prepared is important.',
            likes_count: 3,
            timestamp: '2022-03-16 08:00:00' // Shortly after Ava's comment
        }
    ]);
};
