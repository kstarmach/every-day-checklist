import { useEffect, useState } from "react"
import List from "./List"
import AddTodo from "./AddTodo"
import { Box } from "@mui/material"
import Calendar from "./Calendar"

import DoneList from "./DoneList"
import { NewTodo, Todo, UpdateTodo } from "../../utils/types"
import todosService from "../../services/todos"

const TodoView = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    const getTodos = async () => {
        const data = await todosService.getTodos()
        setTodos(data)
    }

    const createTodo = async (todo: NewTodo) => {
        const data = await todosService.createTodo(todo)
        setTodos([...todos, data])
    }

    const updateTodo = async (todo: UpdateTodo) => {
        const todoToUpdate = {
            id: todo.id,
            text: todo.text,
            done: !todo.done
        }
        const updatedTodo: Todo = await todosService.updateTodo(todoToUpdate)
        setTodos(todos.map(todo => todo.id !== todoToUpdate.id ? todo : updatedTodo))
    }

    const deleteTodo = async (id: string) => {
        await todosService.deleteTodo(id);
        setTodos(todos.filter(todo => todo.id !== id))
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <Box component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${300}px)` } }}>

            <Calendar />

            <AddTodo createTodo={createTodo} />
            <br />
            <List todos={Array.isArray(todos) ? todos.filter(todo => !todo.done) : []} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            <DoneList todos={Array.isArray(todos) ? todos.filter(todo => todo.done) : []} updateTodo={updateTodo} deleteTodo={deleteTodo} />

        </Box>
    )
}

export default TodoView