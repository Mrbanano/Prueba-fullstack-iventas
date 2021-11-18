const User = require('../models/User')

const userConnected = async (_id) => {
  const user = await User.findById(_id)
  user.online = true
  await user.save()
  return user
}

const userDesconnected = async (_id) => {
  const user = await User.findById(_id)
  user.online = false
  await user.save()
  return user
}

module.exports = {
  userConnected,
  userDesconnected
}
