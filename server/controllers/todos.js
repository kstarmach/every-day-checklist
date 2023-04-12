const router = require('express').Router()
const Todo = require('../models/todo')

router.get('/', async (_, res) => {
    const todos = await Todo.find({})
    await res.send(todos)
})

router.post('/', async (req, res) => {
    if (!req.body.text || !req.body.text.trim()) {
        return res.status(400).send({ error: "Input value cannot be empty or contain only whitespaces" });
    }


    const todo = await Todo.create({
        text: req.body.text,
        done: false,
        createDate: new Date()
    })

    res.send(todo)
})


router.put('/:id', async (req, res) => {
    const { id } = req.params

    const todo = await Todo.findById(id)
    if (!todo) return res.sendStatus(404)

    if (req.body.text) {
        todo.text = req.body.text
        todo.done = req.body.done ?? false
        todo.updateDate = new Date()
    }

    const updatedTodo = await todo.save()
    res.status(200).send(updatedTodo)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const todo = await Todo.findByIdAndDelete(id)
        if (!todo) { return res.status(404).json({ message: "Todo not found" }) }

        res.sendStatus(200)

    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }

})

module.exports = router