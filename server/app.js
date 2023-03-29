const { PORT } = require('./util/config')

const express = require('express')
const cors = require('cors');

const todosRouter = require('./routes/todos')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/todos', todosRouter)

module.exports = app;