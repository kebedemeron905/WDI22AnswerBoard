const mongoose = require('../db/connection.js')

const AnswerSchema = new mongoose.Schema({
  text: String,
  name: String,
  likes: Number
})

module.exports = AnswerSchema
