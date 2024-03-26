const knex = require('knex')(require('../knexfile'));
const router = require('express').Router();
const repliesController = require('../controllers/replies-controller');
const commentsController = require("../controllers/comments-controller")


router

    .route('/')

    .get(commentsController.fetchComments)

    .post(repliesController.postReply);

router 

    .route('/:commentId/:replyId')

    .delete(repliesController.deleteReply);

module.exports = router;