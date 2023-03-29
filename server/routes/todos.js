const router = require('express').Router()
const { Todo } = require('../mongo')

router.get('/', async (_, res) => {
    const todos = await Todo.find({})
    await res.send(todos)
})

router.post('/', async (req, res) => {
    if (!req.body.text) {
        res.status(400).json({ error: 'text cannot be empty' })
    }

    const todo = await Todo.create({
        text: req.body.text,
        done: false
    })

    res.send(todo)
})



module.exports = router