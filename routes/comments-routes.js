const knex = require('knex')(require('../knexfile'));
const router = require('express').Router();
const commentsController = require("../controllers/comments-controller")

router
  
  .route('/')

  .get(commentsController.fetchComments)

  .post(commentsController.postComment)

router
  .route('/:id')
  .delete(commentsController.deleteComment)
  .put(commentsController.likeComment)
  

module.exports = router;
