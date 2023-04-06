import { Container } from '@mui/material'
import TodoView from './components/Todos/TodoView'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <Container >
      <Sidebar />
      <TodoView />
    </Container>
  )
}

export default App
