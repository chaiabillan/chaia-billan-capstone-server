const knex = require('knex')(require('../knexfile'));
const router = require('express').Router();
const commentsController = require("../controllers/comments-controller")

router
  
  .route('/')

  .get(commentsController.fetchComments)

  .post(commentsController.postComment)

module.exports = router;
