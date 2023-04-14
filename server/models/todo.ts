import mongoose, { Model, Schema } from 'mongoose';
import { TodoDocument, Todo } from '../utils/types';

const todoSchema = new Schema<Todo>({
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
    transform: (_document: any, returnedObject: TodoDocument) => {
        returnedObject.id = returnedObject._id ? returnedObject._id.toString() : ''
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const TodoModel: Model<Todo> = mongoose.model<Todo>('Todo', todoSchema);

export default TodoModel