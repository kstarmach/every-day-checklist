import Todo from "./Todo"

const List = ({ todos, updateTodo }) => {
    return (
        <>
            {todos.map((todo) => {
                return (<Todo todo={todo} updateTodo={updateTodo} key={todo.id}/>)
            })}
        </>
    )
}

export default List