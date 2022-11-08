const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
  res.json(await Post.find())
})

router.get('/:id', async (req, res) => {
  res.json(await Post.find({ user_id: req.params.id }))
})

router.post('/', (req, res) => {
  const post = new Post(req.body)
  post.save()
    .then(() => res.json({status: '[OK] created'}))
    .catch(err => res.json({status: `[ERROR] ${err}`}))
})

router.delete('/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({status: '[OK] deleted'})
})

module.exports = router
