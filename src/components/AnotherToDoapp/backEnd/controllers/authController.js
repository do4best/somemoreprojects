/* eslint-env node */
/* eslint-disable no-undef */
import {User} from "../models/Users.js";
import jwt from "jsonwebtoken";

import path from "path";
import {fileURLToPath} from "url";
import dotenv from "dotenv";
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
dotenv.config({path:path.join(__dirname,"../.env")});
// Guard against non-Node environments where `process` is undefined
const secretKey = (typeof process !== 'undefined' && process.env) ? process.env.JWT_SECRET : undefined;
async function registerUser(req, res) {
  const {firstName,lastName,email,phone,username,password} = req.body;
  try {
    const duplicateUser = await User.findOne({ username });
    if (duplicateUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    const user = new User({ firstName,lastName,email,phone,username,password });
    await user.save();
    res.status(201).json({ message: "User Registered Successfully" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e?.message || "Registration failed" });
  }
}
///////////////////// loginUser/////////////////
async function loginUser(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }
    if (!secretKey) {
      return res.status(500).json({ message: "Server misconfiguration: missing JWT secret" });
    }
    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: "1h" });
    const findData = {
      userId: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      token
    };
    return res.status(200).json({ findData });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e?.message || "Login failed" });
  }
}
const authController={
  registerUser,
  loginUser
}
export  {authController};