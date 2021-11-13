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
    message: {
      type: String,
      required: true
    }
  },
  { versionKey: false, timestamps: true }
)

const Message = model('Message', shema)

module.exports = Message
