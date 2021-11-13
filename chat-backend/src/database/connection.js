const mongoose = require('mongoose')
const config = require('../config')

;(async () => {
  try {
    const connection =
      process.env.NODE_ENV === 'develop'
        ? config.MONGODB_URI_TEST
        : config.MONGODB_URI
    const db = await mongoose.connect(connection)
    console.log(
      'Mongodb is connected to',
      db.connection.host,
      'in',
      db.connection.name
    )
  } catch (error) {
    console.error(error)
  }
})()
