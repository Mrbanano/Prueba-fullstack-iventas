const User = require('../models/User')
const { sign } = require('jsonwebtoken')
const { SECRET, TimeOut } = require('../config')

const SignUp = async (req, res, next) => {
  res.status(501).json({
    success: false,
    count: 1,
    data: {
      message: 'Proximanente'
    }
  })
}

const SignIn = async (req, res, next) => {
  try {
    const { Email, Password } = req.body

    const foundUser = await User.findOne({ Email })

    if (!foundUser) {
      res.status(403).json({
        success: false,
        count: 1,
        data: {
          message: 'el usuario no existe'
        }
      })
      return
    }

    const match = await User.comparePassword(Password, foundUser.Password)

    if (!match) {
      res.status(403).json({
        success: false,
        count: 1,
        data: {
          message: 'Correo o contraseña incorrecta'
        }
      })
      return
    }

    const token = sign({ id: foundUser._id }, SECRET, {
      expiresIn: TimeOut
    })

    res.status(200).json({
      success: true,
      count: 1,
      data: {
        token,
        user: {
          id: foundUser._id,
          name: foundUser.Name,
          lastName: foundUser.lastName,
          email: foundUser.Email,
          role: foundUser.Role,
          avatar: foundUser.Avatar,
          Age: foundUser.Age,
          phone: foundUser.Phone,
          problem: foundUser.Problem,
          priority: foundUser.Priotiry,
          CURP: foundUser.CURP,
          messages: foundUser.id_Messages
        }
      }
    })
  } catch (error) {
    console.log('[❌]', error.message)
    res.status(400).json({ success: false, error: error.message })
    next()
  }
}

module.exports = {
  SignIn,
  SignUp
}
