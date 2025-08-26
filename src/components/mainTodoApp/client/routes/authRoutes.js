import express from "express";
import {User} from "../models/user.js";

const router = express.Router();
router.post('/register', async (req, res) => {
    let {firstName, lastName, email, username, password} = req.body;

    try {
        const duplicate = User.find({username});
        if (duplicate && duplicate.length > 0) {
            return res.send("Username already exists");
        }

        const user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: "" + password + ""
        })

        const result = await user.save()
        console.log(result);

        res.status(200).send({message: "User Registered Successfully"});


    } catch (err) {
        console.log(err)
        res.status(400).send({message: "Username already exists"});
    }})
// creating login route

export {router}

