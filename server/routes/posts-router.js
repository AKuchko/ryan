const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const Comment = require('../models/Comment')

router.get('/', async (req, res) => {
  res.json(await Post.find())
})

router.get('/:id', async (req, res) => {
  try {
    res.json(await Post.find({ user_id: req.params.id }))
  }
  catch (err) {
    res.status(400).json({error: err.name, message: err.message})
  }
})

router.put('/comment/:id', async (req, res) => {
  try {
    const comment = new Comment(req.body)
    const post = await Post.findById(req.params.id)
    const currentComments = post.comments
  
    currentComments.push(comment)

    await post.update({ comments: currentComments })
  
    res.json({status: '[OK] created'})
  }
  catch (err) {
    res.json({name: err.name, message: err.message})
  }
})  

router.put('/:id', async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: '[OK] updated' })
  }
  catch (err) {
    res.json({name: err.name, message: err.message})
  }
})

router.post('/', async (req, res) => {
  try {
    const post = new Post(req.body)
    await post.save()
    res.json({status: '[OK] created'})
  }
  catch (err) {
    res.json.status(400).json({error: err.name, message: err.message})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({status: '[OK] deleted'})
  }
  catch (err) {
    res.status(400).json({error: err.name, message: err.message})
  }
})

module.exports = router
