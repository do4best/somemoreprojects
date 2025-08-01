const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
app.use(cors());
app.use(express.json())
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});
