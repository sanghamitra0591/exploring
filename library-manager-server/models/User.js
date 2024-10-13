const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['super_admin', 'admin', 'user'], default: 'user' },
  penalties: { type: Number, default: 0 } // Penalty for late returns
});

module.exports = mongoose.model('User', userSchema);
