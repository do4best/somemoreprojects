import {User} from "../models/User.js";

async function registers(req, res) {
    let {firstName, lastName,email, phone, username, password} = req.body;
    try{
        const duplicate = await User.findOne({username});
        if(duplicate && duplicate > 0) {return res.status(400).send("User already exists");}
        const user = await User.create({firstName, lastName,email,phone, username, password});
        const result = user.save()
        console.log(result);
        res.status(200).send("User created successfully");

    }catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }

}
async function login(req, res) {
    let {firstName, lastName, username, password} = req.body;
    console.log(firstName, lastName, username, password);
    res.send("ok Success");
}
const AuthController = {registers,login}
export default AuthController;