require('dotenv').config()

const MONGO_URL = process.env.MONGO_URL || undefined
const PORT = process.env.PORT

module.exports = {
    PORT,
    MONGO_URL
}