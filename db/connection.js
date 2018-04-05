const mongoose = require('mongoose')

const connectionURI = `mongodb://localhost/questions_db`

mongoose.connect(connectionURI)
mongoose.Promise = Promise

module.exports = mongoose
