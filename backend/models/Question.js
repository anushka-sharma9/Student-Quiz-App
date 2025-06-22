const mongoose = require('mongoose');
const QuestionSchema = new mongoose.Schema({
  question: String,
  type: String,
  options: [String]
});
module.exports = mongoose.model('Question', QuestionSchema);
