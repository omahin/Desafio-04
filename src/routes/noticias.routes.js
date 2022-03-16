const express = require('express')
const router = express.Router()
const controller = require('../controllers/noticias.controller')

router.get('/todos', controller.verNoticias)

module.exports = router