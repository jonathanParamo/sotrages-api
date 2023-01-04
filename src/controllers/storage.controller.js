const Storage = require('../models/storage.model')

module.exports = {
  async createStorage (req, res) {
    try {
      const { body, user: { userId } } = req;
      await Storage.create({
        userId,
        name: body.name,
        amount: body.amount,
        category: body.category
      })

      const storages = await Storage.find({ userId })
      res.status(201).json({ storages })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async getStorages (req, res) {
    try {
      const { user: { userId } } = req;

      const storages = await Storage.find({ userId })
      res.status(201).json({ storages })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async update (req, res) {
    try {
      const { body, user: { userId } } = req;
      await Storage.findByIdAndUpdate(body._id, body, {new:true})

      const storages = await Storage.find({ userId })
      res.status(201).json({ storages })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async destroy (req, res) {
    try {
      const { body, user: { userId } } = req;
      await Storage.findByIdAndRemove(body._id)

      const storages = await Storage.find({ userId })
      res.status(201).json({ storages })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
}
