const express = require('express')
const cors = require('cors');

const todosRouter = require('./controller/todos')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/todos', todosRouter)

module.exports = app;