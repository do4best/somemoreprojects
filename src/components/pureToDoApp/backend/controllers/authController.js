import {Client} from "../models/ClientRavi.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
let jwtsecret = process.env.JWT_SECRET_KEY;

async function registerUser(req, res) {
    let {firstName,lastName,username,password} = req.body;
    try{
        const duplicate = Client.findOne({username});
        if (duplicate && duplicate.length > 0){
            return res.status(400).send({message: "Username already exists"});}
        let user = new Client({firstName,lastName,username,password})
        let result = await user.save();
        console.log(result);
        res.status(201).send({message:"User Registered Successfully"});

    }catch (e) {
        console.log(e);
        res.status(400).send({message: e?.message || "Registration failed"});
    }
}
async function loginUser(req, res) {
    try{
        let {username,password} = req.body;
        let user = await Client.findOne({username});
        if (!user){
            return res.status(400).send({message: "User Not Found"});
        }
        let isMatch = await user.comparePassword(password);
        if (!isMatch){
            return res.status(400).send({message: "Invalid Password"});
        }
        let token = jwt.sign({userId:user?._id},jwtsecret,{expiresIn:"1h"});
        let findData = {
            userId:user?._id,
            username:user?.username,
            firstName:user?.firstName,
            lastName:user?.lastName,
            token
        }
        res.status(200).send(findData);
    }catch (e) {
        console.log(e);
        res.status(400).send({message: e?.message || "Login failed"});
    }
}

const authController = {registerUser,loginUser}

export default authController;