const { PORT } = require('./util/config')

const express = require('express')
const cors = require('cors');

const todosRouter = require('./routes/todos')

const app = express()

app.use(cors())

app.use('/api/todos', todosRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

module.exports = app;