const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
  res.json(await Post.find())
})

router.get('/:id', async (req, res) => {
  res.json(await Post.find({ user_id: req.params.id }))
})

// router.post('/', async (req, res) => {
//   const post = new Post(req.body)
// })

module.exports = router
