import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import {Authrouter} from "./routes/authRoutes.js";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json())
app.use('/api',Authrouter)
mongoose.connect("mongodb://localhost:27017/lasttodo").then((res)=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
})
// eslint-disable-next-line no-undef
app.listen(process.env.PORT_NO,()=>{
    console.log("server is running on port 5000");
});