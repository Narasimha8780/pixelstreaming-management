const express = require('express')
const router = express.Router()
const serversController = require('../controllers/serversController')

// Get all servers
router.get('/', serversController.getAllServers)

// Get server by ID
router.get('/:id', serversController.getServerById)

// Perform action on server (freeze, restart, etc.)
router.post('/:id/action', serversController.performAction)

module.exports = router
