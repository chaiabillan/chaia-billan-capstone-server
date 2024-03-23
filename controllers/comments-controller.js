const knex = require("knex")(require("../knexfile"));

const fetchComments = async ( req, res ) => {
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
          // if there isn't already an entry for that row, then we add it to the accumulator
          if (!acc[row.comment_id]) {
            // Create a new entry for the comment if it doesn't already exist
            // populate the entry with info from the corresponding row 
            acc[row.comment_id] = {
              comment_id: row.comment_id,
              username: row.username,
              comment_text: row.comment_text,
              likes_count: row.likes_count,
              timestamp: row.timestamp,
              // create a replies array that the replies will be pushed into 
              replies: [],
            };
          }
  
          // check if that same row has an associated reply (reply_id)
          // Add reply to the corresponding comment by pushing it to the replies array of the comment 
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
  
      // convert the accumulator object (comments) into an array of comment objects before sending the response.
      // this is because client side will usually expect an array of objects to work with
      res.status(200).json(Object.values(comments));
  
      } catch(err) {
        res.status(400).send(`Error retrieving Comments: ${err}`);
      }
}

const postComment = async (req, res) => {
    try {
        // console.log(req.body)

        const newComment = {
            username: req.body.username,
            comment_text: req.body.comment_text
        }
        const result = await knex("comments").insert(newComment);
        const newCommentId = result[0];
        const createdComment = await knex("comments").where({
            comment_id: newCommentId,
        }).first();

        res.status(201).json(createdComment);
    } catch (error) {
        res.status(500).json({
            message: `Unable to post new comment: ${error}`,
        })
        // console.error(err);
    }
}

const deleteComment = async (req, res) => {
    try {

        const commentId = req.params.id;
        console.log(commentId);
        const commentExists = await knex("comments")
            .where({comment_id: commentId})
            .first();
        
            if(!commentExists) {
                return res 
                    .status(404)
                    .json({message: `Comment with id ${commentId} not found`});
            }

            await knex("comments")
                .where({comment_id: commentId})
                .del();

            res.sendStatus(204);
    } catch(error) {
        res.status(500).json({
            message:`Unable to delete comment: ${error}`
        })
    }
}

module.exports = {
    fetchComments,
    postComment,
    deleteComment
}