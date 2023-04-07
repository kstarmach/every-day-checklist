import axios from "axios"
import { useEffect, useState } from "react"
import List from "./List"
import AddTodo from "./AddTodo"
import { Box } from "@mui/material"
import Calendar from "./Calendar"

import DoneList from "./DoneList"

const TodoView = () => {
    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        const { data } = await axios.get('/todos')
        setTodos(data)
    }

    const createTodo = async (todo) => {
        const { data } = await axios.post('/todos', todo)
        setTodos([...todos, data])
    }

    const updateTodo = async (todo) => {
        await axios.put(`/todos/${todo.id}`, {
            text: todo.text,
            done: !todo.done
        })
        getTodos()
    }

    const deleteTodo = async (todo) => {
        await axios.delete(`/todos/${todo.id}`)
        getTodos()
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <Box component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${300}px)` } }}>

            <Calendar />

            <AddTodo createTodo={createTodo} />
            <br/>
            <List todos={todos.filter(todo => !todo.done)} updateTodo={updateTodo} deleteTodo={deleteTodo} />

            <DoneList todos={todos.filter(todo => todo.done)} updateTodo={updateTodo} deleteTodo={deleteTodo} />

        </Box>
    )
}

export default TodoView