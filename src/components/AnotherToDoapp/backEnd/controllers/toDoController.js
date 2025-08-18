import {TodoList} from "../models/TodoList.js";
const createToDo=async (req,res)=>{
    try{
        const data=req.body;
        const todo = new TodoList(data)
        const result = await todo.save();
        console.log(result);
        res.status(201).send({message:"Created Successfully"});

    }catch (e) {
        console.log(e);
        res.status(400).send({message:e?.message || "Registration failed"});
    }
};
export {createToDo};