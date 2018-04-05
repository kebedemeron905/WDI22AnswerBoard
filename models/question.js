const mongoose = require('../db/connection.js')

const AnswerSchema = new mongoose.Schema({
  answer: String,
  name: String,
  likes: Number
})

const QuestionSchema = new mongoose.Schema({
  subject: String,
  details: String,
  date: String,
  asker: String,
  answers: [AnswerSchema]
})

module.exports = mongoose.model('Question', QuestionSchema)
