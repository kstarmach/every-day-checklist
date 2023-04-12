import Todo from "../models/todo";
import { Todo as TodoType } from "../utils/types";


const getAllTodos = async (): Promise<TodoType[]> => {
    const todos = await Todo.find({})
    // console.log(todos);

    return todos
}

export default {
    getAllTodos
}   