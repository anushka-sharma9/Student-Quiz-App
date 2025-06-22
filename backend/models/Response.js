const mongoose = require('mongoose');
const ResponseSchema = new mongoose.Schema({
  questionId: String,
  response: mongoose.Schema.Types.Mixed
});
module.exports = mongoose.model('Response', ResponseSchema);
