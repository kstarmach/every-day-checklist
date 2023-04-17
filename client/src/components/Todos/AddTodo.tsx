import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { NewTodo } from '../../utils/types';

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
            component="form"
            // sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
            // sx={{ position: 'absolute', bottom: 0, marginBottom: '10px' }}
            onSubmit={handleSubmit}
            elevation={3}
        >
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" type='submit'>
                <AddIcon />
            </IconButton>

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Add a task"
                inputProps={{
                    'aria-label': 'Add a task',
                    pattern: '.*\\S+.*',
                }}
                onChange={onChange}
                value={text}
                required
            />
        </Paper>

    )
}

export default AddTodo