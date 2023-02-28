const router = require('express').Router()
const { recoveryPassword } = require('../controllers/mail.controller')

router.route('/').post(recoveryPassword)

module.export = router