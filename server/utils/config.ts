import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URL = process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;
const PORT = process.env.PORT;

export default {
    PORT,
    MONGODB_URL
};