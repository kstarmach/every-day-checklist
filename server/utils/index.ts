import { NewTodo } from "./types"

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
}

const parseString = (text: unknown): string => {
    if (!text || !isString(text)) {
        throw new Error('Incorrect or missing input')
    }

    return text.trim();
}

type Fields = { text: unknown, done: unknown };

const toNewTodo = ({ text, done }: Fields): NewTodo => {
    const newTodo: NewTodo = {
        text: parseString(text),
        done: Boolean(done) ?? false,
        createDate: new Date()
    };

    return newTodo
}

export default toNewTodo