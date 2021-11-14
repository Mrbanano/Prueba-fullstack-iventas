require('dotenv').config({
  path: '../.env'
})

const config = {
  MONGODB_URI_TEST: `mongodb://${
    process.env.MONGODB_HOST_TEST || 'localhost'
  }/${process.env.MONGODB_DATABASE_TEST || 'Chat'}`,

  MONGODB_URI: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ge68o.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,

  SECRET: process.env.SECRET || 'SECRETO-DE-PRUEBA',
  TimeOut: process.env.TIMEOUT || '8h'
}

module.exports = config
