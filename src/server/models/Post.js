const mongoose = require('mongoose')
const { Schema } = mongoose

const Post = new Schema({
  user_id: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  comments: Array,
  subtitle: String
})

module.exports = mongoose.model('Post', Post)
