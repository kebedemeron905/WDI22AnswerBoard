const router = require('express').Router()
const db = require('../db/connection')
const Question = require('../models/question.js')

router.get('/', (req, res) => {
  Question
    .find({})
    .then((questions) => res.render('list', {questions}))
})

module.exports = router
