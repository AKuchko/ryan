const { Router } = require('express')
const router = new Router()
const User = require('../models/User')

router.get('/', async (req, res) => {
    try {
        res.status(200).json(await User.find())
    }
    catch (err) {
        res.status(400).json({message: `client error [400]: ${err}`})
    }
})

router.get('/:id', async (req, res) => {
    try {
        res.status(200).json(await User.findById(req.params.id))
    }
    catch (err) {
        res.status(400).json({message: `client error [400]: ${err}`})
    }
})

router.put('/:id', async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(204).json({message: 'resource updated successfully'})
    }
    catch (err) {
        res.status(400).json({message: `client error [400]: ${err}`})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        return res.status(204).json({message: 'resource deleted successfully'})
    }
    catch (err) {
        res.status(400).json({message: `client error [400]: ${err}`})
    }
})

module.exports = router
