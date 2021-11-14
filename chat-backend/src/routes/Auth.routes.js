const { Router } = require('express')
const router = Router()

const { SignUp, SignIn } = require('../controllers/Auth.controller')

router.post('/signin', SignIn)

module.exports = router
