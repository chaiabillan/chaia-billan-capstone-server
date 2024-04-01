const knex = require('knex')(require('../knexfile'));
const router = require('express').Router();
const emailsController = require('../controllers/emails-controller');

router

    .route('/')

    .post(emailsController.postEmail)

module.exports = router;