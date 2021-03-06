const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    Sender: {
      ref: 'User',
      type: Schema.Types.ObjectId,
      required: true
    },
    Receiver: {
      ref: 'User',
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
