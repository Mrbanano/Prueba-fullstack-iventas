/**
 * Server
 */
const express = require('express')
const http = require('http')
const socketio = require('socket.io')

/**
 * middlewares
 */
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const { urlencoded, json } = require('express')
/**
 *  initial Setup
 */
const { dbConnection } = require('../database/connection')
const initialSetup = require('../libs/initialSetup')
const Sockets = require('./Sockets')

/*
 * requieres routers
 */
const AuthRouter = require('../routes/Auth.routes')
const MessageRouter = require('../routes/Message.routes')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT || 3000

    dbConnection()
    initialSetup()

    this.server = http.createServer(this.app)
    this.io = socketio(this.server, {
      /* configuraciones */
    })
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(morgan('dev'))
    this.app.use(helmet())
    this.app.use(urlencoded({ extended: false }))
    this.app.use(express.json())

    // Routin
    this.app.use('/chat/api/v1/Auth', AuthRouter)
    this.app.use('/chat/api/v1/Message', MessageRouter)
  }

  configurarSockets() {
    new Sockets(this.io)
  }

  execute() {
    this.middlewares()
    this.configurarSockets()
    this.server.listen(this.port, () => {
      console.log('Server corriendo en puerto:', this.port)
    })
  }
}

module.exports = Server
