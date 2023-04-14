import TodoModel from "../models/todo";
import { NewTodo, Todo } from "../utils/types";


const getAllTodos = async (): Promise<Todo[]> => {
    const todos = await TodoModel.find({});

    return todos;
};

const getTodoById = async (id: string): Promise<Todo| string> => {
    const todo = await TodoModel.findById(id);
    return todo || 'Todo not found!';
};

const addTodo = async (newTodo: NewTodo): Promise<Todo> => {
    const todo = new TodoModel(newTodo);
    await todo.save();

    return todo;
};

const updateTodo = async (id: string, todo: any): Promise<Todo | string> => {
    try {
        todo.updateDate = new Date();
        const updatedTodo = await TodoModel.findByIdAndUpdate(id, todo, { new: true });

        return updatedTodo || 'Error while updatig';
    } catch (error) {
        throw new Error('error.message');
    }
};

type DeleteResult = { status: number, message: string };

const deleteTodo = async (todoId: string): Promise<DeleteResult> => {

    const deletedTodo = await TodoModel.findByIdAndDelete(todoId);
    if (deletedTodo === null) {
        return { status: 404, message: 'No todo was found with that ID.' };
    } else {
        return { status: 200, message: `Deleted todo: ${deletedTodo}` };
    }
};

export default {
    getAllTodos,
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo
};   