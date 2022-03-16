const express = require('express')
const db = require('./data/database')

db.connect()

const app = express()

app.use(express.json())

const usuarioRouter = require('./routes/usuarios.routes')
app.use('/usuario', usuarioRouter)

const noticiasRouter = require('./routes/noticias.routes')
app.use('/noticias', noticiasRouter)

module.exports = app