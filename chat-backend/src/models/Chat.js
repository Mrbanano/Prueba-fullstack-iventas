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

const Chat = model('Chat', schema)

module.exports = Chat
