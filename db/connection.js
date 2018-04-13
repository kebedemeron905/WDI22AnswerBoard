const mongoose = require('mongoose')
const connectionURI = `mongodb://localhost/questions_db`

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect(connectionURI)
}

mongoose.Promise = Promise

module.exports = mongoose
