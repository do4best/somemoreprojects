import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import {router} from "./routes/authRoute.js";
dotenv.config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
// eslint-disable-next-line no-undef
mongoose.connect(process.env.DB_URL)
    .then((result)=>{console.log("connected to database")})
    .catch((err)=>{console.log(err)});

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api',router)

app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)});