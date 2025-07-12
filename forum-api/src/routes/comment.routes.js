const express = require('express');
const router = express.Router();
const controller = require('../controllers/comment.controller');

router.post('/', controller.createComment);
router.get('/', controller.getAllComments);
router.get('/:id', controller.getCommentById);
router.put('/:id', controller.updateComment);
router.delete('/:id', controller.deleteComment);

module.exports = router;
