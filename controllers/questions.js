const router = require('express').Router()
const db = require('../db/connection')
const Question = require('../models/question.js')
const AnswerSchema = require('../models/answer.js')
const mongoose = require('../db/connection.js')
const Answer = mongoose.model('Answer', AnswerSchema)

router.get('/', (req, res) => {
  Question
    .find({})
    .then((questions) => res.render('list', {questions}))
})

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  Question.create(req.body)
    .then(() => res.redirect('/'))
})

router.get('/:id', (req, res) => {
  Question
    .findById({_id: req.params.id})
    .then((question) => {
      res.render('show', {question})
    })
})

router.post('/:id', (req, res) => {
  let newAnswer = new Answer(req.body)
  Question.findById({_id: req.params.id})
    .then((question) => {
      question.answers.push(newAnswer)
      question.save()
        .then(() => {
          res.redirect(`/${req.params.id}`)
        })
    })
})

module.exports = router