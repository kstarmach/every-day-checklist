import Chip from '@mui/material/Chip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';
import Todo from "./Todo"

const DoneList = ({ todos, updateTodo }) => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    };

    const icon = show ? <ExpandMoreIcon /> : <NavigateNextIcon />
    if(todos.length > 0){
    return (
        <>
            <Chip
                label={`Completed ${todos.length}`}
                size="small"
                onClick={handleClick}
                icon={icon}
                sx={{ margin: '10px 0' }}
            />

            {show && todos.map((todo) => {
                return (<Todo todo={todo} updateTodo={updateTodo} key={todo.id} />)
            })}
        </>
    )}
    return(<></>)
}

export default DoneList