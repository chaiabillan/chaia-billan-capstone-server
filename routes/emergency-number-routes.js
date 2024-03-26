const knex = require('knex')(require('../knexfile'));
const router = require('express').Router();
const emergencyNumberController = require('../controllers/emergency-number-controller')

router 

.route('/')

.get(emergencyNumberController.fetchCountries)


router

 .route('/:countryName')

 .get(emergencyNumberController.fetchNumber)

 module.exports = router;