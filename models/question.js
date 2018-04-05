const mongoose = require('../db/connection.js')
const AnswerSchema = require('./answer.js')

const QuestionSchema = new mongoose.Schema({
  subject: String,
  details: String,
  date: String,
  asker: String,
  answers: [AnswerSchema]
})

module.exports = mongoose.model('Question', QuestionSchema)
