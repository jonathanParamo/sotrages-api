const { model, Schema } = require('mongoose')

const ProductSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  image: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  storageId: {
    type: Schema.Types.ObjectId,
    ref: "Storage",
    required: true
  },
  name: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
})

const Product = model('Product', ProductSchema)

module.exports = Product
