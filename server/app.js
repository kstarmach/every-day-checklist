const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const todosRouter = require('./controllers/todos')
const config = require('./utils/config')

const app = express()

mongoose.connect(config.MONGODB_URL)
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.error('error connecting to MongoDB', error.message)
    })

app.use(cors())
app.use(express.json())

app.use('/api/todos', todosRouter)

module.exports = app;