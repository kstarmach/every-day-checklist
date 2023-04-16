import { ListItemIcon, ListItemText, MenuItem } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { useState } from 'react'

import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';
import ContentCopy from '@mui/icons-material/ContentCopy';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AlertDialog from './AlertDialog';
import { Todo } from '../../util/types';

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
            <MenuList sx={{ width: 300, maxWidth: '100%' }}>
                {!todo.done ?
                    <MenuItem onClick={handleSetComplete}>
                        <ListItemIcon>
                            <CheckCircleOutlineIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Mark as complete</ListItemText>
                    </MenuItem>
                    :
                    <MenuItem onClick={handleSetComplete}>
                        <ListItemIcon>
                            <RadioButtonUncheckedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Mark as not complete</ListItemText>
                    </MenuItem>
                }
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <EditIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Edit</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        ⌘X
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Copy</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        ⌘C
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ArchiveIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Archive</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        ⌘V
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem sx={{ color: 'red' }} onClick={handleClickOpen}>
                    <ListItemIcon sx={{ color: 'red' }}>
                        <DeleteForeverIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Delete task</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        Delete
                    </Typography>
                </MenuItem>

            </MenuList>
            <AlertDialog handleClose={handleClose} open={open} taskName={todo.text} handleDelete={handleDelete} />
        </>
    )
}

export default ContextMenu