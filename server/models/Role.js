const { Schema, model } = require('mongoose')

const Role = new Schema({
    value: { type: String, default: 'user', unique: true}
})

module.exports = model('Role', Role)