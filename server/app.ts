import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import todosRouter from './controllers/todos';
import config from './utils/config';

const app = express();

if (config.MONGODB_URL) {
    mongoose.connect(config.MONGODB_URL)
        .then(() => {
            console.log('connected to MongoDB');
        })
        .catch((error) => {
            console.error('error connecting to MongoDB', error.message);
        });
} else {
    console.error('MONGODB_URL not found!');
}

app.use(cors());
app.use(express.json());

app.use('/api/todos', todosRouter);

export default app;