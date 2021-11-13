const { Schema, model } = require('mongoose')
const { genSaltSync, hashSync, compare } = require('bcrypt')

const schema = new Schema({
  Name: {
    type: String,
    required: true,
    unique: true
  },
  lastName: {
    type: String,
    required: true
  },
  Avatar: {
    type: String
  },
  Age: {
    type: Number,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  },
  CURP: {
    type: String,
    required: true
  },
  Phone: {
    type: Number,
    required: true
  },
  Priotiry: {
    type: Number,
    required: true
  },
  Problem: {
    type: String
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

const Customer = model('Customer', schema)

module.exports = Customer
