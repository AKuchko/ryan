const mongoose = require('mongoose')
const { Schema } = mongoose

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, default: 'Username' },
  photo: String,
  posts: [{ type: Object, ref: 'Post'}],
  subscriptions: [{ type: Object, ref: 'User'}],
  role: [{type: String, ref: 'Role'}]
})

module.exports = mongoose.model('User', User)
