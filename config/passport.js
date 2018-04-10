const LocalStrategy = require('passport-local')
const User = require('../models/user')

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user)
    })
  })

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, email, password, done) {
    User.findOne({'local.email': email}, function (err, user) {
      if (err) return done(err)
      if (user) {
        return done(null, false, req.flash('signupMessage', 'That email is already in use!'))
      } else {
        const newUser = new User()
        newUser.local.email = email
        newUser.local.password = newUser.encrypt(password)
        newUser.save(err => {
          if (err) throw err
          return done(null, newUser)
        })
      }
    })
  }))
}
