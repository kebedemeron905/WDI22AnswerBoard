const router = require('express').Router()
const db = require('../db/connection')
const Question = require('../models/question.js')

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

module.exports = router
