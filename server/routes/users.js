const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async (req, res) => {
  res.json(await User.find())
})

router.get('/:id', async (req, res) => {
  res.json(await User.findById(req.params.id))
})

router.post('/', (req, res) => {
  const user = new User(req.body)
  user.save()
    .then(() => res.json({ status: '[OK]: created' }))
    .catch(err => res.json({ status: `[BAD REQUEST]: ${err}` }))
})

router.put('/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body)
  res.json({ status: '[OK]: updated' })
})

router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.json({ status: '[OK]: deleted' })
})

module.exports = router
