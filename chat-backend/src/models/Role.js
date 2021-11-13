const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
)

const Role = model('Role', schema)

module.exports = Role
