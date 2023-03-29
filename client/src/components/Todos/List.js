import { ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, Paper } from '@mui/material'

const Todo = ({ todo }) => {

    const handleToggle = () => {
        todo.done = !todo.done
    }

    return (
        <Paper elevation={3} sx={{ marginBottom: '5px' }} >
            <ListItem disablePadding>
                <ListItemButton
                    role={undefined}
                    dense
                    onClick={handleToggle()}
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
        </Paper>

    )
}

const List = ({ todos }) => {
    return (
        <>
            {todos.map((todo) => {
                return (<Todo todo={todo} key={todo.id} />)
            })}
        </>
    )
}

export default List