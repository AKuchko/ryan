const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/reg', async (req, res) => {
  const user = new User(req.body)
  user.save()
    .then(() => res.json({ status: '[OK]: created' }))
    .catch(err => res.json({ status: `[BAD REQUEST]: ${err}` }))
})

module.exports = router