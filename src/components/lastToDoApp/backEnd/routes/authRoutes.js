import express from 'express';
import AuthController from "../controllers/authController.js";

const Authrouter = express.Router();
Authrouter.post('/register', AuthController.registers);
Authrouter.post('/login', AuthController.login)

export {Authrouter}