const User = require('../models/usuario.model')
const Storage = require('../models/storage.model')
const jwt = require('jsonwebtoken')

module.exports = {
  async createUser (req, res) {
    try {
      const { body } = req
      const user = await User.create(body)

      const firstStorage = {
        userId: user._id,
        amount: 1000,
        category: 'General',
        name: 'Bodega 01'
      };

      const storage = await Storage.create(firstStorage);

      const token = jwt.sign(
        {
          userId: user._id,
        },
        process.env.SECRET || 'mySecretKey',
        { expiresIn: '365d' }
      )

      res.status(201).json({ user, storage, token })
    } catch (error) {
      res.status(400).json({message: error.message})
    }
  },
  async getUser (req, res) {
    const { user: { userId: _id } } = req;
    try {
      const user = await User.findById({ _id });
      res.status(201).json(user)
    } catch(error) {
      res.status(401).json({message: error.message})
    }
  },
  async updateUser (req, res) {
    try {
      const { body } = req
      const user = await User.findByIdAndUpdate(body._id, body, { new: true })
      res.status(201).json(user)
    } catch (error) {
      res.status(401).json({message: error.message})
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user){
        throw Error('Usuario o contraseña invalido')
      }

      if (user.password !== password) {
        throw Error('Usuario o contraseña invalido')
      }

      const token = jwt.sign(
        {
          userId: user._id,
        },
        process.env.SECRET || 'mySecretKey',
        { expiresIn: '365d' }
      )

      res.status(201).json({ user, token })
    } catch(error) {
      res.status(401).json({message: error.message})
    }
  },
}
