const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log('MondoDB Connected')

    process.on('uncaughtException', (err) => {
      console.log(`Uncaught Exception: ${err.message}`)
      process.exit(1)
    })
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
