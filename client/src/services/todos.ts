import axios from "axios";
import { NewTodo, UpdateTodo, Todo } from "../utils/types";
const baseUrl = '/todos/'

const getTodos = async () => {
    const { data } = await axios.get(baseUrl)
    return data
}

const createTodo = async (todo: NewTodo) => {
    const { data } = await axios.post(baseUrl, todo)
    return data
}

const updateTodo = async (todo: UpdateTodo): Promise<Todo> => {
    const response = await axios.put(baseUrl + '/' + todo.id, todo)

    return response.data;
}

const deleteTodo = async (id: string) => {
    await axios.delete(`/todos/${id}`)
}

export default {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}