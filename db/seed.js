const Question = require('../Models/question')
const initialData = require('./initialdata.json')

Question.remove({})
  .then(() => {
    initialData.forEach(Question => {
      Question.create(Question)
    })
  })
