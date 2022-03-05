// Model
const { Todo } = require('../models/todo.model');

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll({
            where: {
                status: 'active'
            }
        });

        res.status(200).json({
            status: 'success',
            data: {
                todos
            }
        });
    } catch (error) {
        console.log(error);
    }
};

exports.getTodoById = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findOne({
            where: {
                status: 'active',
                id
            }
        });

        if (!todo) {
            res.status(404).json({
                status: 'error',
                message: 'Cant find ToDo with the given ID'
            });
            return;
        }

        res.status(200).json({
            status: 'success',
            data: {
                todo
            }
        });
    } catch (error) {
        console.log(error);
    }
};

exports.createNewTodo = async (req, res) => {
    try {
        const { content } = req.body;

        const newTodo = await Todo.create({
            content
        });

        if (!newTodo) {
            res.status(400).json({
                status: 'error',
                message: "Can't add an empty ToDo"
            });
            return;
        }

        res.status(200).json({
            status: 'success',
            data: {
                newTodo
            }
        });
    } catch (error) {
        console.log(error);
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;

        const todo = await Todo.findOne({
            where: {
                id,
                status: 'active'
            }
        });

        if (!todo) {
            res.status(400).json({
                status: 'error',
                message: 'error 404, todo not found'
            });
            return;
        }

        todo.update({
            content
        });

        res.status(200).json({
            status: 'success',
            data: {
                todo
            }
        });
    } catch (error) {
        console.log(error);
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findOne({
            where: {
                id,
                status: 'active'
            }
        });

        if (!todo) {
            res.status(400).json({
                status: 'error',
                message: 'error 404, ToDo not found'
            });
            return;
        }

        todo.update({
            status: 'disable'
        });

        res.status(200).json({
            status: 'success'
        });
    } catch (error) {
        console.log(error);
    }
};
