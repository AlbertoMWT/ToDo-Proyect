const express = require('express');

const {
    getAllTodos,
    getTodoById,
    createNewTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todo.controller');

const router = express.Router();

router.get('/', getAllTodos);

router.get('/:id', getTodoById);

router.post('/', createNewTodo);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

module.exports = {
    todosRouter: router
};
