const User = require('../models/User')
const Message = require('../models/Message')

const userConnected = async (_id) => {
  try {
    const user = await User.findById(_id)
    user.online = true
    const userUdpate = await user.save()
    return userUdpate
  } catch (error) {
    return error
  }
}

const userDesconnected = async (_id) => {
  try {
    const user = await User.findById(_id).sort('-online')
    user.online = false
    const newUSer = await user.save()
    return newUSer
  } catch (error) {
    return error
  }
}

const getUsers = async () => {
  try {
    const Users = await User.find().sort('-online')
    return Users
  } catch (error) {
    return error
  }
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
