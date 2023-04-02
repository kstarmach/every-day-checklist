const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false,
        required: true
    },
    createDate: {
        type: Date,
        required: true
    },
    order: {
        type: Number,
        required: false
    },
    updateDate: {
        type: Date,
        required: false
    }
})

todoSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo