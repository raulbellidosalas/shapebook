const ForumPost = require('../models/ForumPost');
require('../models/Category');
exports.createForumPost = async (req, res) => {
  try {
    const post = new ForumPost(req.body);
    const saved = await post.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllForumPosts = async (req, res) => {
  try {
    const posts = await ForumPost.find().populate('author category');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getForumPostById = async (req, res) => {
  try {
    const post = await ForumPost.findById(req.params.id).populate('author category');
    if (!post) return res.status(404).json({ message: 'Publicación no encontrada' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateForumPost = async (req, res) => {
  try {
    const updated = await ForumPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Publicación no encontrada' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteForumPost = async (req, res) => {
  try {
    const deleted = await ForumPost.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Publicación no encontrada' });
    res.json({ message: 'Publicación eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
