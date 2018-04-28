const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
  type: String,
  title: String,
  content: String,
  time: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('doc', docSchema);
