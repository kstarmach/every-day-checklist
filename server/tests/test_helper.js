const Todo = require('../models/todo')

const initialTodos = [
    {
        text: "My first task",
        done: false,
        createDate: new Date()
    },
    {
        text: "Its second task",
        done: false,
        createDate: new Date()
    },
    {
        text: "Finished task",
        done: true,
        createDate: new Date()
    }
]

module.exports = {
    initialTodos
}