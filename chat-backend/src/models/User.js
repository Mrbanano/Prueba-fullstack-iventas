const { Schema, model } = require('mongoose')
const { genSaltSync, hashSync, compare } = require('bcrypt')

const schema = new Schema({
  Name: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  Avatar: {
    type: String
  },
  Age: {
    type: Number
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String
  },
  CURP: {
    type: String,
    required: true,
    unique: true
  },
  Phone: {
    type: Number,
    required: true
  },
  Priotiry: {
    type: String,
    required: true
  },
  Problem: {
    type: String
  },
  Roles: {
    ref: 'Role',
    type: Schema.Types.ObjectId
  },
  online: {
    type: Boolean,
    default: false
  },
  id_Messages: [
    {
      ref: 'Message',
      type: Schema.Types.ObjectId
    }
  ]
})

schema.statics.encryptPassword = async (password) => {
  const salt = await genSaltSync(10)
  return await hashSync(password, salt)
}
schema.statics.comparePassword = async (password, recivedpassword) => {
  return await compare(password, recivedpassword)
}

const User = model('User', schema)

module.exports = User
