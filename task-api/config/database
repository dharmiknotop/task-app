const mongoose = require('mongoose')
const connectDatabase = () => {
  const DB = process.env.DATABASE

  mongoose
    .connect(
      DB,
      { useNewUrlParser: true },
      { useCreateIndex: true },
      { useUnifiedTopology: true },
      { useFindAndModify: false },
    )
    .then(() => {
      console.log('excellent')
    })
}
module.exports = connectDatabase
