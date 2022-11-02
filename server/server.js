const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
// const { db } = require('./models/User')

const app = express()
const PORT = 3000
const DB_URL = 'mongodb://localhost:27017/ryan_app'

app.set('port', PORT)

mongoose.connect(DB_URL, { useNewUrlParser: true })
  .then(() => console.log('Status [OK]: DB is connected'))
  .catch(err => console.log(`Status [FAIL]: Connection is failed\n ${err}`))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use('/api/users', require('./routes/users'))
app.use('/api/posts', require('./routes/posts'))

app.use('/', express.static(path.join(__dirname, '../dist')))

app.listen(PORT, () => {
  console.log(`Status [OK]: app is running on port ${PORT}`)
})
