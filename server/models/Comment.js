const { Schema, model } = require('mongoose');

const Comment = new Schema({
    post_id: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
})

module.exports = model('Comment', Comment)