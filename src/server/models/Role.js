const mongoose = require('mongoose')
const { Schema } = mongoose

const Role = new Schema({
    value: { type: String, default: 'user', unique: true}
})

module.exports = mongoose.model('Role', Role)