const User = require('../models/usuario.model')
const jwt = require('jsonwebtoken')

module.exports = {
  async resetPassword (req,res) {
    try {
      const { body: { password, token } } = req
      const { userId } = jwt.verify(token, process.env.SECRET)

      await User.findByIdAndUpdate(userId, { password }, {new:true})

      res.status(201).json({ message: 'success' })
    } catch (error ) {
      res.status(400).json({ message: error.message })
    }
  },
}