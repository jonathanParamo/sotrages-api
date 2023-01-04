const { model, models, Schema } = require('mongoose')

const storageSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
})

const Storage = model('Storage', storageSchema)

module.exports = Storage
