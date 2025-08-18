import mongoose from 'mongoose';
const {Schema} = mongoose;
const todoSchema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    isComplete:{type:Boolean,required:true,default:false},
    completedOn:String,
    createdBy:{
        ref:'User',
        type:Schema.Types.ObjectId,
        required:true,
    }
},
{
    timestamps:true,
});
const TodoList = mongoose.model('TodoList', todoSchema);
export {TodoList};