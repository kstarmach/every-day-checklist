import { Container, Box } from '@mui/material'
import TodoView from './components/Todos/TodoView'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <Container >
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <TodoView />
      </Box>
    </Container>
  )
}

export default App
