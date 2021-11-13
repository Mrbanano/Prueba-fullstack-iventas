const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    Name: {
      type: String,
      required: true,
      unique: true
    },
    Description: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
)

const Role = model('Role', schema)

module.exports = Role
