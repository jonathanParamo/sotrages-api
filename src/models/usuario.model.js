const { model, models, Schema } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
  },
  surname: {
    type: String,
    required: true
  },
  secondSurname: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      async validator (email) {
        try {
          const user = await models.User.findOne({ email })
          return !user
        } catch (error) {
          return false
        }
      },
      message: 'El correo ya está en uso'
    }
  },
  image: {
    type: String,
  },
  address: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  role: {
    type: String,
  },
}, {
  timestamps: true
})

const User = model('User', userSchema)

module.exports = User
