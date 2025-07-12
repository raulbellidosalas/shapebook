const express = require('express');
const router = express.Router();
const controller = require('../controllers/forum-post.controller');

router.post('/posts', controller.createForumPost);
router.get('/', controller.getAllForumPosts);
router.get('/:id', controller.getForumPostById);
router.put('/:id', controller.updateForumPost);
router.delete('/:id', controller.deleteForumPost);

module.exports = router;
