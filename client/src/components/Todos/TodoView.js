import axios from "axios"
import { useEffect, useState } from "react"
import List from "./List"

const TodoView = () => {
    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        const { data } = await axios.get('/todos')
        setTodos(data)
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <List todos={todos} />
    )
}

export default TodoView