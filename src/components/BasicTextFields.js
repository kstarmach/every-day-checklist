import * as React from 'react'
import TextField from '@mui/material/TextField'

export default function BasicTextFields() {
  return (
    <>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        sx={{ width: '100%' }}
      />
    </>
  )
}
