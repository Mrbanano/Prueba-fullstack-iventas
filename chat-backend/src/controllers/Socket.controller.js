const User = require('../models/User')
const Message = require('../models/Message')

const userConnected = async (_id) => {
  const user = await User.findById(_id)
  user.online = true
  await user.save()
  return user
}

const userDesconnected = async (_id) => {
  const user = await User.findById(_id).sort('-online')
  user.online = false
  await user.save()
  return user
}

const getUsers = async () => {
  const Users = await User.find().sort('-online')
  return Users
}
const savedMessage = async (payload) => {
  try {
    const mensaje = new Message(payload).save()
    return mensaje
  } catch (error) {
    console.log('[❌ ]', `No se pudo guardar el mensaje`)
    return error
  }
}

module.exports = {
  userConnected,
  userDesconnected,
  getUsers,
  savedMessage
}
