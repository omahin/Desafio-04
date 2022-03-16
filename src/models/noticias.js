const mongoose = require('mongoose')

const noticiasSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    linkArticle: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date  
    }
})

module.exports = mongoose.model('noticias', noticiasSchema)