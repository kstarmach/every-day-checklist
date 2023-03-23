import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'

function Header() {
  const [date, setDate] = useState(new Date())

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const handlePrevDay = () => {
    const newDate = new Date(date)
    newDate.setDate(date.getDate() - 1)
    setDate(newDate)
  }

  const handleNextDay = () => {
    const newDate = new Date(date)
    newDate.setDate(date.getDate() + 1)
    setDate(newDate)
  }

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          onClick={handlePrevDay}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {daysOfWeek[date.getDay()]} {date.toLocaleDateString()}
        </Typography>

        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          onClick={handleNextDay}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Toolbar>
    </React.Fragment>
  )
}

export default Header
