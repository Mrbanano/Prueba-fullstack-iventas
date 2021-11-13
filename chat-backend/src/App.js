const express = require('express')

const initialSetup = require('./libs/initialSetup')

const app = express()
const connection = require('./database/connection')
initialSetup()
module.exports = app
