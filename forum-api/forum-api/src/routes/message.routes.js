const express = require('express');
const router = express.Router();
const controller = require('../controllers/message.controller');

// Create a new message
// POST /api/messages
router.post('/', controller.createMessage);

// Get all messages
// GET /api/messages
router.get('/', controller.getAllMessages);

module.exports = router;