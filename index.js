const express = require('express')
const parser = require('body-parser')
const hbs = require('hbs')
// const questionsController = require('./controllers/questions')
const methodOverride = require('method-override')
const app = express()

app.set('view engine', 'hbs')
app.use(parser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
// app.use('/', questionsController)

app.listen(4004, () => {
  console.log('app listening on http://localhost:4004/')
})
