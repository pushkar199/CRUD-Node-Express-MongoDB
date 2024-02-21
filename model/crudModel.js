const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Crud = new Schema({
    title: { type: String, required: true },
    task : {type: String, required: true}

})

module.exports = mongoose.model('Crud', Crud)
