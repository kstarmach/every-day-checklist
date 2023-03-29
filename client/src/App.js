import { Container } from '@mui/material'
import Header from './components/Header'
import TodoView from './components/Todos/TodoView'

function App() {
  return (
    <div>
      <Container>
        <Header />
        <TodoView />
      </Container>
    </div>
  )
}

export default App
