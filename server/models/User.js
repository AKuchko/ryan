const { Schema, model } = require('mongoose')

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, default: 'Username' },
  photo: { type: String },
  chats: [{ type: Object, ref: 'Chat' }],
  posts: [{ type: Object, ref: 'Post' }],
  subscriptions: [{ type: Object, ref: 'User' }],
  role: [{ type: String, ref: 'Role'}]
})

module.exports = model('User', User)
