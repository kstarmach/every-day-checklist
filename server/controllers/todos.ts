import todoService from "../services/todoService";
import express, { RequestHandler } from 'express';
import toNewTodo from '../utils';
const router = express.Router();

router.get('/', (async (_, res) => {
    const todos = await todoService.getAllTodos();
    res.send(todos);
}) as RequestHandler);

router.get('/:id', (async (req, res) => {
    const todo = await todoService.getTodoById(req.params.id);
    res.json(todo);
}) as RequestHandler);

router.post('/', (async (req, res) => {
    try {
        const newTodo = toNewTodo({ text: req.body.text, done: req.body.done });
        const addTodo = await todoService.addTodo(newTodo);
        res.json(addTodo);
    }
    catch (error) {
        res.status(400).send({ error: 'Input value cannot be empty or contain only whitespaces' });
    }

}) as RequestHandler);


router.put('/:id', (async (req, res) => {
    try {
        const todo = toNewTodo({ text: req.body.text, done: req.body.done });

        const updatedTodo = await todoService.updateTodo(req.params.id, todo);
        res.status(200).send(updatedTodo);
    }
    catch (error) {
        res.status(400).send({ error: 'Something went wrong here!' });
    }
}) as RequestHandler);


router.delete('/:id', (async (req, res) => {
    try {
        const result = await todoService.deleteTodo(req.params.id);

        res.status(result.status).send(result.message);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }

}) as RequestHandler);

export default router;