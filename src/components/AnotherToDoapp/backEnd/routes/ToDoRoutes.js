import express from 'express';

import {createToDo} from "../controllers/ToDoController.js";
import authenticationToken from "../middleware/authJwt.js";

const ToDorouter = express.Router();
ToDorouter.post('/createToDo', authenticationToken,createToDo);


export {ToDorouter}