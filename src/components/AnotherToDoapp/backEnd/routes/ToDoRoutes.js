import express from 'express';

import {createToDo} from "../controllers/ToDoController.js";

const ToDorouter = express.Router();
ToDorouter.post('/createToDo', createToDo);


export {ToDorouter}