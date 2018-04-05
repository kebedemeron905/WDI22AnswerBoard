const Question = require('../models/question')
const initialData = require('./initialdata.json')

Question.remove({})
  .then(() => {
    initialData.forEach(question => {
      Question.create(question)
    })
  })
