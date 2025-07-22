const express = require('express')
const router = express.Router()
const renderNodesController = require('../controllers/renderNodesController')

// Register a render node
router.post('/register', renderNodesController.registerRenderNode)

// Get all render nodes
router.get('/', renderNodesController.getAllRenderNodes)

module.exports = router
