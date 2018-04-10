const router = require('express').Router()
const User = require('../models/user.js')
var express = require('express')
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
