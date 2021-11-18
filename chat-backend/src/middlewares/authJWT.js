const jwt = require('jsonwebtoken')
const { SECRET } = require('../config')
const User = require('../models/User')

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token']

    if (!token) {
      res.status(403).json({
        success: false,
        count: 1,
        data: {
          message: 'necesitas un token'
        }
      })
      return
    }
    const decoded = jwt.verify(token, SECRET)
    req.userId = decoded.id

    const user = await User.findById(req.userId, { Password: 0 }).populate(
      'Roles'
    )

    if (!user) {
      res.status(403).json({
        success: false,
        count: 1,
        data: {
          message: 'token invalido'
        }
      })
      return
    }

    req.user = user
    next()
  } catch (error) {
    console.log('[❌]', error.message)
    res.status(400).json({ success: false, error: error.message })
    return
  }
}

const verifyTokenSocket = (token = '') => {
  try {
    const decoded = jwt.verify(token, SECRET)
    return [true, decoded.id]
  } catch (error) {
    console.log('[❌]', error.message)
    return [false, null]
  }
}

module.exports = {
  verifyToken,
  verifyTokenSocket
}
