const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  // You can add more fields like author, publication date, etc. as needed
});

module.exports = mongoose.model('News', newsSchema);
