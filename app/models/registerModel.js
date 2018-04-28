const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  name: String,
  password: String,
  time: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('register', registerSchema);
