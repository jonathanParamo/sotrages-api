const { auth } = require("../utils/auth")
const router = require('express').Router()
const { createStorage, getStorages, update, destroy } = require('../controllers/storage.controller')

router.route('/create').post(auth, createStorage)
router.route('/getAll').get(auth, getStorages)
router.route('/update').put(auth, update)
router.route('/destroy').put(auth, destroy)

module.exports = router
