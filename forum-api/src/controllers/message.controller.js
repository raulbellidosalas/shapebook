const Message = require('../models/Message');

// GET /messages
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find()
      .populate('sender', 'username')
      .sort({ createdAt: -1 }); // Newest first
    res.json({ messages });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /messages
exports.createMessage = async (req, res) => {
  try {
    const { content, sender } = req.body;
    const message = new Message({ content, sender });
    const saved = await message.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};