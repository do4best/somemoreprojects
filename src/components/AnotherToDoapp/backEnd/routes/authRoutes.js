import express from 'express';
import {authController} from "../controllers/authController.js";

const Authrouter = express.Router();
Authrouter.post('/register', authController.registerUser);
Authrouter.post('/login', authController.loginUser)

export {Authrouter}