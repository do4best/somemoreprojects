const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();
app.use(cors());
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/todo").then((res)=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});
