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

const ContextMenu = () => {
    return (
        <MenuList sx={{ width: 300, maxWidth: '100%' }}>
            <MenuItem>
                <ListItemIcon>
                    <CheckCircleOutlineIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Mark as complete</ListItemText>
            </MenuItem>
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
            <MenuItem sx={{ color: 'red' }}>
                <ListItemIcon sx={{ color: 'red' }}>
                    <DeleteForeverIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Delete task</ListItemText>
                <Typography variant="body2" color="text.secondary">
                    Delete
                </Typography>
            </MenuItem>

        </MenuList>
    )
}

const Todo = ({ todo, updateTodo }) => {
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

    const handleClose = () => {
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
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                    contextMenu !== null
                        ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                        : undefined
                }
            >
                <ContextMenu />
            </Menu>
        </Paper>

    )
}

export default Todo