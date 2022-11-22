const User = require('../../server/models/User')
const Role = require('../../server/models/Role')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { Router, json } = require('express')
const router = new Router()
const nodemailer = require('nodemailer')

router.post('/reg', async (req, res) => {
  try {
    const { email, password, username } = req.body
    if (!email || !password) return res.status(400).json({message: 'values can not be empty'})

    const candidate = await User.findOne({ email })
    if (candidate) return res.status(400).json({message: 'user already registered'})

    const userRole = await Role.findOne({value: 'user'})
    const userTempName = username ? username : `User/${Math.random() * 10000}`
    const hashPassword = bcrypt.hashSync(password, 7)

    const newUser = new User({email, password: hashPassword, username: userTempName, userRole})
    await newUser.save()

    res.status(201).json({message: 'user created successfully'})
  }
  catch (err) {
    res.json({error: err.name, message: err.message})
  }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
  
        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ message: 'user not found' })
  
        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) return res.status(400).json({ message: 'wrong password' })
        
        const token = jwt.sign({ id: user._id }, 'SRCRET_KEY', { expiresIn: '3m' })
        const refresh = jwt.sign({ id: user._id }, 'REFRESH_SECRET_KEY', { expiresIn: '10m' })
        res.json({ access: token, refresh: refresh })
        return { access: token, refresh: refresh }
      }
      catch {
        return res.status(400).json({message: 'Something wrong'})
      }
})

router.post('/token/refresh', (req, res) => {
  const token = jwt.sign({ id: user._id }, 'SRCRET_KEY', { expiresIn: '3m' })
  const refresh = jwt.sign({ id: user._id }, 'REFRESH_SECRET_KEY', { expiresIn: '10m' })
  res.json({ access: token, refresh: refresh })
})

router.post('/mailer', (req, res) => {
  const _config = {
      user: 'sasha.studio.kuchko@gmail.com',
      pass: 'ofbfndxlvvwhrzzn'
  }

  const code = 869098

  const _transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: _config.user,
      pass: _config.pass
    }
  })



  _transporter.sendMail({
    from: _config.user,
    to: req.body.mail,
    subject: "Please confirm your account",
    html: `
      <h1>Ryan confirm</h1>
      <p>Here's your code: </p>
      <div style="display: inline-block; padding: 15px; background: #222; color: #f2f2f2; font-size: 28px;">
        ${code}
      </div>
    `,
  }).catch(err => console.log(err));
  res.json({mail: "send"})
})

module.exports = router