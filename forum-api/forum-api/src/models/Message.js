const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  // Sender of the message
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'El remitente es requerido']
  },

  // Message content
  content: {
    type: String,
    required: [true, 'El contenido del mensaje es requerido'],
    trim: true,
    maxlength: [2000, 'El mensaje no puede exceder los 2000 caracteres']
  },

  // Timestamp
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Static method to get all messages
messageSchema.statics.getAllMessages = function() {
  return this.find()
    .populate('sender', 'username')
    .sort({ createdAt: 1 });
};

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;