import mongoose, { Model, Schema } from 'mongoose';
import { Todo } from '../utils/types';

const todoSchema = new Schema<Todo>(
    {
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
    },
    {
        toJSON: {
            transform: function (_, ret) {
                // Remove _id and __v, and replace _id with id
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            }
        }
    }
);


const TodoModel: Model<Todo> = mongoose.model<Todo>('Todo', todoSchema);

export default TodoModel;