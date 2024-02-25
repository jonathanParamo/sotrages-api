const router = require('express').Router()
const { resetPassword } = require('../controllers/resetPassword.controller')

router.route('/').put(resetPassword)

module.exports = router