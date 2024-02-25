require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')
const { connect } = require('./db')
const express = require('express')
const usuarioRouter = require('./routes/usuario')
const storageRouter = require('./routes/storages')
const productsRouter = require('./routes/products')
const recoveryRouter = require('./routes/recovery')
const resetPasswordRouter = require('./routes/resetPassword')

const port = process.env.PORT || 8000
const app = express()
connect()

app.use(express.json())
app.use(cors({
  origin: "*",
  methods: "GET,POST,PUT",

}))
app.use(morgan('dev'))

app.get('/', (req,res) => {
  res.status(200).json({ message: 'Hola Andrés'})
})

app.use('/users', usuarioRouter)
app.use('/storages', storageRouter)
app.use('/products', productsRouter)
app.use('/recovery-password', recoveryRouter)
app.use('/reset-password', resetPasswordRouter)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})
