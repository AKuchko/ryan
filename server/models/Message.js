const { Schema, model } = require('express')

const Message = new Schema({
    user_id: { type: String, required: true },
    message: { type: String, required: true },
    image: { type: String },
})

module.exports = model('Message', Message)