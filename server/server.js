const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000
// const DB_URL = 'mongodb://localhost:27017/ryan_app'
const DB_URL = 'mongodb+srv://root:JcvlY8gZv3tEBUjB@cluster0.9mibaxj.mongodb.net/?retryWrites=true&w=majority'

app.set('port', PORT)

mongoose.connect(DB_URL, { useNewUrlParser: true })
  .then(() => console.log('Status [OK]: DB is connected'))
  .catch(err => console.log(`Status [FAIL]: Connection is failed\n ${err}`))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use('/api/users', require('./routes/users-router'))
app.use('/api/posts', require('./routes/posts-router'))
app.use('/api/auth', require('./routes/auth-router'))

app.use('/', express.static(path.join('dist')))

app.listen(PORT, () => {
  console.log(`Status [OK]: app is running on port ${PORT}`)
})

// JcvlY8gZv3tEBUjB
// mongodb+srv://root:JcvlY8gZv3tEBUjB@cluster0.9mibaxj.mongodb.net/?retryWrites=true&w=majority