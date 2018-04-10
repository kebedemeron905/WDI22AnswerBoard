var express = require('express')
const router = require('express').Router()
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var passport = require('passport')

router.get('/signup', (req, res) => {
  res.render('signup', {
    message: req.flash('signupMessage')
  })
})

router.post('/signup', (req, res) => {
  const signupStrategy = passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  })
  return signupStrategy(res, res)
})

module.exports = router
