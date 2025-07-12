const express = require('express');
const router = express.Router();
const controller = require('../controllers/chat.controller');

router.post('/', controller.createChat);
router.get('/', controller.getAllChats);
router.get('/:id', controller.getChatById);
router.put('/:id', controller.updateChat);
router.delete('/:id', controller.deleteChat);

module.exports = router;
