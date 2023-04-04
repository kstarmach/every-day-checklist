import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const AddTodo = ({ createTodo }) => {
    const [text, setText] = useState('')

    const onChange = ({ target }) => {
        const value = target.value
        if (!value.trim()) {
            setText('')
            return;
        }
        setText(value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        createTodo({ text })
        setText('')
    }

    return (
        <Paper
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
            onSubmit={handleSubmit}
        >
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" type='submit'>
                <AddIcon />
            </IconButton>

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Add a task"
                inputProps={{ 'aria-label': 'Add a task' }}
                onChange={onChange}
                value={text}
                required
                pattern=".*\S+.*"
            />
        </Paper>
    )
}

export default AddTodo