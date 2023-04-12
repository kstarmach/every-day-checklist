const mongoose = require('mongoose')
const supertest = require('supertest')
// const app = require('../app')
import app from '../app'

const api = supertest(app)

const Todo = require('../models/todo')
const helper = require('./test_helper')

beforeEach(async () => {
    await Todo.deleteMany({})

    for (let todo of helper.initialTodos) {
        let todoObject = new Todo(todo)
        await todoObject.save()
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
    test('posting body with all params returns json with id', async () => {
        const todo = {
            text: 'random new todo',
            done: 'false'
        }

        const response = await api.post('/api/todos').send(todo)

        expect(response.body).toHaveProperty('text', 'random new todo')
        expect(response.body).toHaveProperty('createDate')
        expect(response.status).toBe(200)
    })

    test('posting empty body return error and status 400', async () => {
        const response = await api.post('/api/todos').send({})

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('error')
    })
})

describe('HTTP PUT', () => {
    test('succesfully updating status return updated todo', async () => {
        const todosAtStart = await helper.todoInDb()
        const firstTodo = todosAtStart[0]
        firstTodo.done = !firstTodo.done

        const response = await api
            .put(`/api/todos/${firstTodo.id}`)
            .send(firstTodo)
            .expect(200)


        expect(response.body.text).toEqual("My first task")
        expect(response.body.done).toBe(true)
    })
})

describe('HTTP DELETE', () => {
    test('correct id should remove todo and return ok', async () => {
        const todosAtStart = await helper.todoInDb()
        const firstTodo = todosAtStart[0]

        await api
            .delete(`/api/todos/${firstTodo.id}`)
            .expect(200)

        const todosAtEnd = await helper.todoInDb()

        expect(todosAtEnd).toHaveLength(helper.initialTodos.length - 1)
        expect(todosAtEnd).not.toContainEqual(firstTodo)
    })

    test('wrong id should return 404', async () => {
        const todosAtStart = await helper.todoInDb()
        const firstTodo = todosAtStart[0]

        await api
            .delete(`/api/todos/642c139d5439c34c75961cba`)
            .expect(404)

        const todosAtEnd = await helper.todoInDb()

        expect(todosAtEnd).toHaveLength(helper.initialTodos.length)
        expect(todosAtEnd).toContainEqual(firstTodo)
    })
})


afterAll(() => {
    mongoose.connection.close()
})
