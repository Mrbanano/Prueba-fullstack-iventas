const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    Customer: {
      ref: 'Customer',
      type: Schema.Types.ObjectId,
      required: true
    },
    Vendor: {
      ref: 'Vendor',
      type: Schema.Types.ObjectId,
      required: true
    },
    Message: {
      type: String,
      required: true
    }
  },
  { versionKey: false, timestamps: true }
)

const Message = model('Message', schema)

module.exports = Message
