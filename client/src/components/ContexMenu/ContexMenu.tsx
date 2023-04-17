import AlertDialog from '../Alert/AlertDialog';
import { Todo } from '../../util/types';

import MenuOptions from './MenuOptions';
import { useState } from 'react';

interface MenuProps {
    todo: Todo
    updateTodo: (value: Todo) => void;
    deleteTodo: (value: Todo) => void;
    handleCloseContextMenu: () => void;
}

const ContextMenu = ({ todo, updateTodo, deleteTodo, handleCloseContextMenu }: MenuProps) => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        deleteTodo(todo)
        setOpen(false);
        handleCloseContextMenu()
    }

    const handleSetComplete = () => {
        updateTodo(todo)
    }

    return (
        <>
            <MenuOptions
                isDone={todo.done}
                handleClickOpen={handleClickOpen}
                handleSetComplete={handleSetComplete}
            />
            <AlertDialog
                open={open}
                title={"Delete task?"}
                description={`Task "${todo.text}" will be deleted pernamently!`}
                buttonColor='error'
                handleClose={handleClose}
                handleClick={handleDelete}
            />
        </>
    )
}

export default ContextMenu