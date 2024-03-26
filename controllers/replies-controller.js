const knex = require("knex")(require("../knexfile"));

const postReply = async (req, res) => {
    try {
        const { commentId, username, replyText } = req.body;

        // Check if the comment exists
        const commentExists = await knex("comments")
            .where({ comment_id: commentId })
            .first();

        // if comment doesnt exist, return error that says so
        if (!commentExists) {
            return res
                .status(404)
                .json({ message: `Comment with id ${commentId} not found` });
        }

        // Insert the reply into the database
        const newReply = {
            comment_id: commentId,
            username: username,
            reply_text: replyText,
        };

        const result = await knex("replies").insert(newReply);
        const newReplyId = result[0];
        const createdReply = await knex("replies").where({
            reply_id: newReplyId,
        }).first();

        res.status(201).json(createdReply);
    } catch (error) {
        res.status(500).json({
            message: `Unable to post new reply: ${error}`,
        });
    }
};

const deleteReply = async (req, res) => {
    try {
        const { commentId, replyId } = req.params;

        const commentExists = await knex("comments")
            .where({comment_id: commentId})
            .first();

            if (!commentExists) {
                return res 
                    .status(404)
                    .json({message: `Comment with id ${commentId} not found`});
            }
        
        const replyExists = await knex("replies")
            .where({ comment_id: commentId, reply_id: replyId })
            .first();

            if (!replyExists) {
                return res.status(404).json({ message: `Reply with id ${replyId} not found for comment ${commentId}` });
            }


            await knex("replies")
                .where({ comment_id: commentId, reply_id: replyId })
                .del();

            res.sendStatus(204);
    } catch(error) {
        res.status(500).json({
            message:`Unable to delete comment: ${error}`
        })
    }
}

module.exports = {
    postReply,
    deleteReply
}