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
const getAllToDo=async (req,res)=>{
    let {userId}=req.params;
    try{
const result = await TodoList.find({createdBy:userId});
res.status(200).send({result});
    }catch (e) {
            console.log(e);
            res.status(400).send({message:e?.message || "Registration failed"});
    }
}
const deleteToDo=async (req,res)=>{
    try{
        const {id}=req.params;
        const result = await TodoList.findByIdAndDelete(id);
        console.log(result);
        res.status(200).send({message:"Deleted Successfully"});

    }catch (e){
        console.log(e);
        res.status(400).send(e);
    }
}
const updateToDo=async (req,res)=>{
    try{
        const {id}=req.params;
        const data=req.body;
        const result = await TodoList.findByIdAndUpdate(id,{$set:data},{returnOriginal:false});
        console.log(result);
        res.status(200).send({message:"Updated Successfully"});
    }catch (e){
        console.log(e);
        res.status(400).send(e);
    }
}
export {createToDo,getAllToDo,deleteToDo,updateToDo};