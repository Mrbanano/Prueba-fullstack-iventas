/*
 * requieres
 */
const express = require('express')
const { urlencoded, json } = require('express')
const initialSetup = require('./libs/initialSetup')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

/*
 * requieres routers
 */
const AuthRouter = require('./routes/Auth.routes')
const MessageRouter = require('./routes/Message.routes')

/*
 *Initial setup
 */
const app = express()
const connection = require('./database/connection')
initialSetup()

/*
 *Middleware
 */
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(urlencoded({ extended: false }))
app.use(json())

/*
 *Routing
 */
app.use('/chat/api/v1/Auth', AuthRouter)
app.use('/chat/api/v1/Message', MessageRouter)

/**
 *  Export server
 */
module.exports = app
