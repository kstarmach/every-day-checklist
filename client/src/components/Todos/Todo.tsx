import { ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, Paper, Menu } from '@mui/material'
import { useState, MouseEvent } from 'react'
import ContextMenu from '../ContexMenu/ContexMenu'
import { SingleTodo } from '../../utils/types'

interface ContextMenuPosition {
    mouseX: number;
    mouseY: number;
}

const Todo = ({ todo, updateTodo, deleteTodo }: SingleTodo) => {
    const [contextMenu, setContextMenu] = useState<ContextMenuPosition | null>(null)

    const handleToggle = () => {
        updateTodo(todo)
    }

    // const handleContextMenu = (event) => {
    //     event.preventDefault();
    //     setContextMenu(
    //         contextMenu === null
    //             ? {
    //                 mouseX: event.clientX + 2,
    //                 mouseY: event.clientY - 6,
    //             }
    //             : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
    //             // Other native context menus might behave different.
    //             // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
    //             null,
    //     );
    // };

    const handleContextMenu = (event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault();

        setContextMenu(
            contextMenu === null
                ? {
                    mouseX: event.clientX + 2,
                    mouseY: event.clientY - 6,
                }
                : null
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
                <ContextMenu
                    todo={todo}
                    updateTodo={updateTodo}
                    handleCloseContextMenu={handleCloseContextMenu}
                    deleteTodo={deleteTodo}
                />
            </Menu>
        </Paper>

    )
}

export default Todo