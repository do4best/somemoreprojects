import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {config} from "dotenv";
import {Authrouter} from "./routes/authRoutes.js";

const app = express();

config();
app.use(cors());
app.use(express.json())
app.use('/api',Authrouter)
mongoose.connect("mongodb://localhost:27017/lasttodo").then((res)=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});