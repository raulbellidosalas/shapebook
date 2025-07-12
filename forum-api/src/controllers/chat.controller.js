const Chat = require('../models/Chat');

exports.createChat = async (req, res) => {
  try {
    const chat = new Chat(req.body);
    const saved = await chat.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllChats = async (req, res) => {
  try {
    const chats = await Chat.find()
      .populate('participants')
      .populate('messages');
    res.json(chats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getChatById = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id)
      .populate('participants')
      .populate({
        path: 'messages',
        populate: { path: 'fromUser toUser' }
      });
    if (!chat) return res.status(404).json({ message: 'Chat no encontrado' });
    res.json(chat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateChat = async (req, res) => {
  try {
    const updated = await Chat.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Chat no encontrado' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteChat = async (req, res) => {
  try {
    const deleted = await Chat.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Chat no encontrado' });
    res.json({ message: 'Chat eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
