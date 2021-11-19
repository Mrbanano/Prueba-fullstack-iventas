/* @depretacted 

const express = require('express')
const { io } = require('./SocketServer')
const { urlencoded, json } = require('express')
const initialSetup = require('./libs/initialSetup')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')


const AuthRouter = require ('./routes/Auth.routes')
const MessageRouter = require('./routes/Message.routes')


const app = express()
const connection = require('./database/connection')
initialSetup()


app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(urlencoded({ extended: false }))
app.use(json())


app.use('/chat/api/v1/Auth', AuthRouter)
app.use('/chat/api/v1/Message', MessageRouter)


module.exports = {
  app
}

*/
