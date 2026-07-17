import express from 'express';
import { createTodo, getTodos, getTodoById, UpdateTodo, toggleTodo, deleteTodo } from '../controllers/todo.controller.js';

const route = express.Router();

//Create TODO
route.post('/add', createTodo);

// Get all TODOS
route.get('/',getTodos);

//Get todo by ID
route.get('/:id',getTodoById);

//Update TODO by ID
route.put('/:id',UpdateTodo);

// toggle todo completion  status by id
route.patch('/:id/toggle', toggleTodo);

//delete todo by id
route.delete('/:id',deleteTodo);

export default route;