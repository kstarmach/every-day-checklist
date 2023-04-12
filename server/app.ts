import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'
import todosRouter from './controllers/todos'
// import config from './utils/config'

const app = express()
const temp_mongo_uri = 'mongodb+srv://starmil:MgHptFdpr2D0NtRg@cluster0.exzlqd2.mongodb.net/todoApp?retryWrites=true&w=majority'
mongoose.connect(temp_mongo_uri)
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.error('error connecting to MongoDB', error.message)
    })

app.use(cors())
app.use(express.json())

app.use('/api/todos', todosRouter)

export default app;