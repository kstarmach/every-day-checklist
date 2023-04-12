// const app = require('./app')
import app from './app'
// const config = require('./utils/config')
const temp_port = 3001;

app.listen(temp_port, () => {
    console.log(`Server is running on port ${temp_port}`)
})