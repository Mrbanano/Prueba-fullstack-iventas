const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    Customer: {
      ref: 'User',
      type: Schema.Types.ObjectId,
      required: true
    },
    Vendor: {
      ref: 'User',
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
