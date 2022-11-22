const { Schema, model } = require('express')

const Chat = new Schema({
    user_id: { type: String, required: true },
    companion_id: { type: String, required: true },
    key: { type: String, required: true },
    messages: [{ type: Object, ref: 'Message' }]
})

module.exports = model('Chat', Chat)