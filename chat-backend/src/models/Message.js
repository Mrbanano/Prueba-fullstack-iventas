const { Schema, model } = require('mongoose')

const shema = new Schema(
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

const Message = model('Message', shema)

module.exports = Message
