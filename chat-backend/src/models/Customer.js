const { Schema, model } = require('mongoose')

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
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
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
  problem: {
    type: String
  },
  id_Messages: [
    {
      ref: 'Message',
      type: Schema.Types.ObjectId
    }
  ]
})

const Customer = model('Customer', schema)

module.exports = Customer
