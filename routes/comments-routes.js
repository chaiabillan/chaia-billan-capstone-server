const knex = require('knex')(require('../knexfile'));
const router = require('express').Router();

router
  
  .route('/')

  .get(async (_req, res) => {
    try {

      const commentsWithReplies = await knex('comments')
        // select all the rows from the comments table and then replies table 
        .select('comments.comment_id', 'comments.username', 'comments.comment_text', 'comments.likes_count', 'comments.timestamp',
                'replies.reply_id', 'replies.username AS reply_username', 'replies.reply_text', 'replies.likes_count AS reply_likes_count', 'replies.timestamp AS reply_timestamp')
        // joins together the replies table and the comments table 
        // retrieves everything from the left table (comments, because this is where everything is accumulated) regardless of whether anything correspondds in the right (replies) table
        // comments.comment_id indicates that the join should be based on the comment_id column of the comments table 
        // replies.comment_id indicates that the join should be based on the comment_id column of the replies table
        .leftJoin('replies', 'comments.comment_id', 'replies.comment_id');

      // reduce method iterates over the commentsWithReplies array and groups comments with their associated replies.
      const comments = commentsWithReplies.reduce((acc, row) => {
        // if 
        if (!acc[row.comment_id]) {
          // Create a new entry for the comment if it doesn't exist
          acc[row.comment_id] = {
            comment_id: row.comment_id,
            username: row.username,
            comment_text: row.comment_text,
            likes_count: row.likes_count,
            timestamp: row.timestamp,
            replies: [],
          };
        }

        // Add reply to the corresponding comment
        if (row.reply_id) {
          acc[row.comment_id].replies.push({
            reply_id: row.reply_id,
            username: row.reply_username,
            reply_text: row.reply_text,
            likes_count: row.reply_likes_count,
            timestamp: row.reply_timestamp,
          });
        }
        return acc;
      }, {});



      // const data = await knex('comments');
    res.status(200).json(Object.values(comments));
    } catch(err) {
      res.status(400).send(`Error retrieving Comments: ${err}`);
    }
  });



module.exports = router;