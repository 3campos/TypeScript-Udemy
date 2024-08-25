import { RequestHandler } from 'express';
import { Todo } from '../models/todo'

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    //we can use RequestHandler to assign a type for the const, createTodo. This allows TS to infer types for the request, response, and next parameters.
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.random().toString(), text);

    TODOS.push(newTodo);

    res.status(201).json({message: 'Created the todo.', createdTodo: newTodo})
}