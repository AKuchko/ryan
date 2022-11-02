const mongoose = require('mongoose')
const { Schema } = mongoose

const User = new Schema({
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  nickname: String,
  photo: String
})

module.exports = mongoose.model('User', User)
