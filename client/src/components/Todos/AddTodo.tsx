import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { NewTodo } from '../../utils/types';
import {  ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const AddTodo = ({ createTodo }: { createTodo: (values: NewTodo) => void }) => {
    const [text, setText] = useState('')

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (!value.trim()) {
            setText('')
            return;
        }
        setText(value)
    }


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        createTodo({
            text,
            done: false
        })
        setText('')
    }


    return (
        <Paper
            elevation={3}
            sx={{ marginBottom: '5px' }}
            component={'form'}
            onSubmit={handleSubmit}
        >
            <ListItem disablePadding>
                <ListItemButton
                    role={undefined}
                    dense
                    style={{ cursor: 'context-menu' }}
                >
                               <ListItemIcon >
                        <IconButton color="primary" aria-label="directions" type='submit' sx={{ padding: 0}}>
                            <AddIcon />
                        </IconButton>
                    </ListItemIcon>
                    <ListItemText
                        sx={{
                            // fontSize: 34,
                            fontWeight: 'medium',
                        }}
                    >
                        <InputBase
                            sx={{ width: '100%' }}
                            placeholder="Add a task"
                            inputProps={{
                                'aria-label': 'Add a task',
                                pattern: '.*\\S+.*',
                            }}
                            onChange={onChange}
                            value={text}
                            required
                        />
                    </ListItemText>

         
                </ListItemButton>
            </ListItem>
        </Paper>
    )
}

export default AddTodo