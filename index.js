const express = require('express')
const parser = require('body-parser')
const hbs = require('hbs')
const methodOverride = require('method-override')
const app = express()
const flash = require('connect-flash')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const questionsController = require('./controllers/questions')

app.use(morgan('dev'))
app.use(cookieParser)

app.set('view engine', 'hbs')
app.use(parser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/assets', express.static('public'))

app.use(flash())

const passport = require('passport')
const passportConfig = require('./config/passport')
passportConfig(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(function (req, res, next) {
  res.locals.currentUser = req.user
  next()
})

app.use('/', questionsController)

app.listen(4004, () => {
  console.log('app listening on http://localhost:4004/')
})
