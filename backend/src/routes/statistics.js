const express = require('express')
const router = express.Router()
const statisticsController = require('../controllers/statisticsController')

// Get usage statistics
router.get('/', statisticsController.getStatistics)

// Get country-wise statistics
router.get('/country', statisticsController.getCountryStatistics)

module.exports = router
