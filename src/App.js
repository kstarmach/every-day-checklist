import { Container } from '@mui/material'
import CheckboxList from './components/CheckboxList'
import Header from './components/Header'

import BasicTextFields from './components/BasicTextFields'
function App() {
  return (
    <div>
      <Container>
        <Header />
        <CheckboxList />
        <BasicTextFields />
      </Container>
    </div>
  )
}

export default App
