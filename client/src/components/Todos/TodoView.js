import axios from "axios"
import { useEffect, useState } from "react"
import List from "./List"
import AddTodo from "./AddTodo"
import { Grid } from "@mui/material"
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
        <Grid container direction="column" style={{ height: "98vh" }}>
            <Grid item xs>
                <Calendar />
                <List todos={todos.filter(todo => !todo.done)} updateTodo={updateTodo} />

                <DoneList todos={todos.filter(todo => todo.done)} updateTodo={updateTodo} />
            </Grid>
            <Grid item>
                <AddTodo createTodo={createTodo} />
            </Grid>
        </Grid>

    )
}

export default TodoView