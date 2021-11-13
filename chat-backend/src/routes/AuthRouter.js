const { Router } = require('express')
const router = Router()

const { SignUp, SignIn } = require('../controllers/AuthController')

router.get('/', (req, res) => {
  console.log('AuthRouter')
})

module.exports = router
