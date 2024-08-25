"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    //we can use RequestHandler to assign a type for the const, createTodo. This allows TS to infer types for the request, response, and next parameters.
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the todo.', createdTodo: newTodo });
};
exports.createTodo = createTodo;
