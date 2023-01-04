const { auth } = require("../utils/auth")
const router = require('express').Router()
const { createUser, updateUser, login, getUser } = require('../controllers/user.controller')

router.route('/signin').post(login)
router.route('/signup').post(createUser)
router.route('/updateUser').put(auth, updateUser)
router.route('/get').get(auth, getUser)

module.exports = router
