const User = require('../models/User')
const SignUp = async (req, res, next) => {}

const SignIn = async (req, res, next) => {
  try {
    const Email = req.body.Email

    const foundUser = await User.findOne({ Email })

    res.status(200).send(foundUser)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  SignIn,
  SignUp
}
