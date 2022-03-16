const Noticias = require('../models/noticias')
const noticias = require('../models/noticias')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const verNoticias = async (req,res) => {
    const authHeader = req.get('Authorization')
    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(403).send({message: 'Insira o token para autorizar!'})
    }
    jwt.verify(token, SECRET, async(err) => {
        if (err) {
            return res.status(403).send({message: 'Token não válido!', err})
        }
        const noticias = await Noticias.find()
        res.status(201).json(noticias)
    })
}

module.exports = {
    verNoticias
}