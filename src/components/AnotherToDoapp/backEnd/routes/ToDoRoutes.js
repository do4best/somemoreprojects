import express from 'express';

import {createToDo,getAllToDo,deleteToDo,updateToDo} from "../controllers/toDoController.js";
import authenticationToken from "../middleware/authJwt.js";

const ToDorouter = express.Router();
ToDorouter.post('/createToDo', authenticationToken, createToDo);
ToDorouter.get('/getToDo/:userId', authenticationToken, getAllToDo);
ToDorouter.delete('/deleteToDo/:id', authenticationToken, deleteToDo);
ToDorouter.patch('/updateToDo/:id', authenticationToken, updateToDo);

export { ToDorouter }