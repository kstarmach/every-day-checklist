import { ListProps } from "../../utils/types"
import Todo from "./Todo"

const List = ({ todos, updateTodo, deleteTodo }: ListProps) => {
    return (
        <>
            {todos.map((todo) => {
                return (<Todo todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} key={todo.id} />)
            })}
        </>
    )
}

export default List