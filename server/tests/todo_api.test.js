const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const Todo = require('../models/todo')
const helper = require('./test_helper')

beforeEach(async () => {
    await Todo.deleteMany({})

    for (let todo of helper.initialTodos) {
        let todoObject = new Todo(todo)
        const newTodo = await todoObject.save()
    }
})

describe('HTTP GET', () => {
    test('should return a json of todos', async () => {
        await api
            .get('/api/todos')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('should return 3 initial blogs', async () => {
        const response = await api.get('/api/todos')

        expect(response.body).toHaveLength(3)
    })
})

describe('HTTP POST', () => {
    test('Posting body with all params returns json with id', async () => {
        const todo = {
            text: 'random new todo',
            done: 'false'
        }

        const response = await api.post('/api/todos').send(todo)

        expect(response.body).toHaveProperty('text', 'random new todo')
        expect(response.body).toHaveProperty('createDate')
        expect(response.status).toBe(200)
    })
})


afterAll(() => {
    mongoose.connection.close()
})
