const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  requestDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
  returnDate: { type: Date, required: false },
  penalty: { type: Number, default: 0 },
});

module.exports = mongoose.model('Request', requestSchema);
