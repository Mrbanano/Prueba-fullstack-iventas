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
    History: [
      {
        id_message: {
          ref: 'Message',
          type: Schema.Types.ObjectId
        }
      }
    ]
  },
  { versionKey: false, timestamps: true }
)

const Chat = model('Chat', shema)

module.exports = Chat
