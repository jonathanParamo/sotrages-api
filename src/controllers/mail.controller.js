const User = require('../models/usuario.model')
const jwt = require('jsonwebtoken')
const { sendMail } = require('../mails/mails')

module.exports = {
  async recoveryPassword (rep,res) {
    try {
      const { body: { email } } = req
      const user = await User.findOne({ email })

      if(user) {
        const token = jwt.sign(
          {
            userId: user_id,
          },
          process.env.SECRET || 'mySecretkey',
          { expiresIn: 18 * 18 }
        );

          sendMail(email, token);
      }

      const message = `If your email is correct, in a few minuts you'll
      recive and email with a link to restore your password.
      you'll have 5 minuts to restore your password`;

      res.status(201).json({message})
    } catch ( error ) {
      res.status(400).json({message: error.message})
    }
  },
}
