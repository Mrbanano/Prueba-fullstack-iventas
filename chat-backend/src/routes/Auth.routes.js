const { Router } = require('express')
const router = Router()
const { verifyToken } = require('../middlewares/authJWT')
const { renewToken, SignIn } = require('../controllers/Auth.controller')

router.post('/signin', SignIn)
router.get('/verifytoken', verifyToken, renewToken)

module.exports = router
