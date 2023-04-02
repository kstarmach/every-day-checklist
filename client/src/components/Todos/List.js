import Todo from "./Todo"

const List = ({ todos }) => {
    return (
        <>
            {todos.map((todo) => {
                return (<Todo todo={todo}  />)
            })}
        </>
    )
}

export default List