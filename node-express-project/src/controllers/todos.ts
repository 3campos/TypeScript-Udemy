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

export const getTodos: RequestHandler = (req, res, next) => {
    res.json({todos: TODOS});
};

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
    //{id: string} = generic type
    const todoId = req.params.id;

    const updatedText = (req.body as {text: string}).text;
    //using type casting so that TS knows that the body text will be a string

    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if(todoIndex < 0) {
        throw new Error('Could not find todo!');
    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText)
    //this function accesses the id for the old TODO sets the text for the todo item with the updatedText

    res.json({message: 'Updated!', updatedTodo: TODOS[todoIndex]})
    //updatedTodo is appended to the updated response and updtedTodo is set equal to the TODOS[todoIndex] which holds the updatedText value
}

export const deleteTodo: RequestHandler = (req, res, next) => {
    const todoId = req.params.id;

    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if(todoIndex < 0) {
        throw new Error('Could not find todo!');
    }

    TODOS.splice(todoIndex, 1);

    res.json({message: 'Todo deleted!'})
}