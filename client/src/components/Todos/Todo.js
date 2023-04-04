import { ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, Paper, Menu, MenuItem } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { useState } from 'react'

import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';
import ContentCopy from '@mui/icons-material/ContentCopy';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const AlertDialog = ({ handleClose, open, taskName, handleDelete }) => {


    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete task?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Task "{taskName}" will be deleted pernamently!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDelete} color={'error'}>Delete</Button>
                    <Button onClick={handleClose} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const ContextMenu = ({ todo, updateTodo,deleteTodo, handleCloseContextMenu  }) => {
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

const Todo = ({ todo, updateTodo, deleteTodo }) => {
    const [contextMenu, setContextMenu] = useState(null)

    const handleToggle = () => {
        updateTodo(todo)
    }



    const handleContextMenu = (event) => {
        event.preventDefault();
        setContextMenu(
            contextMenu === null
                ? {
                    mouseX: event.clientX + 2,
                    mouseY: event.clientY - 6,
                }
                : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
                // Other native context menus might behave different.
                // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
                null,
        );
    };

    const handleCloseContextMenu = () => {
        setContextMenu(null);
    }

    return (

        <Paper elevation={3} sx={{ marginBottom: '5px' }} >
            <ListItem disablePadding>
                <ListItemButton
                    role={undefined}
                    dense
                    onClick={handleToggle}
                    onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}
                >
                    <ListItemText
                        primary={` ${todo.text}`}
                        sx={{
                            textDecoration:
                                todo.done ? 'line-through' : 'none',
                            fontSize: 34,
                            fontWeight: 'medium',
                        }}
                    />

                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={todo.done}
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>

            <Menu
                open={contextMenu !== null}
                onClose={handleCloseContextMenu}
                anchorReference="anchorPosition"
                anchorPosition={
                    contextMenu !== null
                        ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                        : undefined
                }
            >
                <ContextMenu todo={todo} updateTodo={updateTodo} handleCloseContextMenu={handleCloseContextMenu} deleteTodo={deleteTodo}/>
            </Menu>
        </Paper>

    )
}

export default Todo