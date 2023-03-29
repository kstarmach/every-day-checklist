const router = require('express').Router()

let todos = [
    {
        id: 1,
        text: 'cos zrobic',
        done: false
    },
    {
        id: 2,
        text: 'coz zrobione',
        done: true
    },
    {
        id: 3,
        text: '😊😂🤣',
        done: true
    },
    {
        id: 4,
        text: 'wtf',
        done: false
    }
]

router.get('/', async (_, res) => {
    await res.send(todos)
})


module.exports = router