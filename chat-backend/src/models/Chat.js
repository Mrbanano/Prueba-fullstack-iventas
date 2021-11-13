const { Schema, model } = require('mongoose')

const shema = new Schema(
  {
    id_transmission: {
      ref: 'User',
      type: Schema.Types.ObjectId,
      required: true
    },
    id_Receptor: {
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

const Chat = model('Chat', shema)

module.exports = Chat
