import axios from "axios"
import { useEffect, useState } from "react"
import List from "./List"
import AddTodo from "./AddTodo"
import { Box, Container } from "@mui/material"
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

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <Box sx={{ pb: 7 }}>
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
                <Calendar />
                <List todos={todos.filter(todo => !todo.done)} updateTodo={updateTodo} />

                <DoneList todos={todos.filter(todo => todo.done)} updateTodo={updateTodo} />
            </Container>
            <Box
                component="footer"
                sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, py: 3, px: 2 }}
            >
                <Container maxWidth="sm">
                    <AddTodo createTodo={createTodo} />
                </Container>
            </Box>
        </Box>
    )
}

export default TodoView