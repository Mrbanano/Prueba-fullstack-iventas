const { Router } = require('express')
const router = Router()
const { getMessagebyUserId } = require('../controllers/Message.controller')
const { verifyToken } = require('../middlewares/authJWT')

router.get('/:id', verifyToken, getMessagebyUserId)

module.exports = router
