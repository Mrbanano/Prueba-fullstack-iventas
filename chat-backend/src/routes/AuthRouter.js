const { Router } = require('express')
const router = Router()

const { SignUp, SignIn } = require('../controllers/AuthController')

router.post('/signin', SignIn)

module.exports = router
