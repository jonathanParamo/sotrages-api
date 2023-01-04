const { auth } = require("../utils/auth")
const router = require('express').Router()
const { createProduct, getProducts, update, destroy } = require('../controllers/product.controller')

router.route('/create').post(auth, createProduct)
router.route('/getAll').get(auth, getProducts)
router.route('/update').put(auth, update)
router.route('/destroy').put(auth, destroy)

module.exports = router
