const { Schema, model } = require('mongoose')

const schenma = new Schema({
  Name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  Phone: {
    type: String,
    required: true
  },
  Avatar: {
    type: String,
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
  id_Messages: [
    {
      ref: 'Message',
      type: Schema.Types.ObjectId
    }
  ]
})

const Vendor = model('Vendor', schenma)

module.exports = Vendor
