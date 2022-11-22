const { Schema, model } = require('mongoose')

const Post = new Schema({
  user_id: { type: String, required: true },
  image: { type: String, required: true },
  caption: String,
  comments: [{ type: Object, ref: 'Comment' }]
})

module.exports = model('Post', Post)
