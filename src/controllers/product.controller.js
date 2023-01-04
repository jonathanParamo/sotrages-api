const Product = require('../models/product.model')

module.exports = {
  async createProduct (req, res) {
    try {
      const { body, user: { userId } } = req;
      await Product.create({
        userId,
        image: body.image,
        amount: body.amount,
        storageId: body.storageId,
        name: body.name
      })

      const products = await Product.find({ userId })
      res.status(201).json({ products })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async getProducts (req, res) {
    try {
      const { user: { userId } } = req;

      const products = await Product.find({ userId })
      res.status(201).json({ products })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async update (req, res) {
    try {
      const { body, user: { userId } } = req;
      await Product.findByIdAndUpdate(body._id, body, {new:true})

      const products = await Product.find({ userId })
      res.status(201).json({ products })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async destroy (req, res) {
    try {
      const { body, user: { userId } } = req;
      await Product.findByIdAndRemove(body._id)

      const products = await Product.find({ userId })
      res.status(201).json({ products })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
}
