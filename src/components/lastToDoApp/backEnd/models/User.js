import mongoose from "mongoose";

import bcrypt from "bcrypt";

const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true}
})
userSchema.pre('save',async function(next){
    const user = this;
    if (!user.isModified) return next();
    user.password = await bcrypt.hash(user.password,10);
    next();
})
userSchema.methods.comparePassword = async function(candidatePassword){
    return bcrypt.compare(candidatePassword,this.password);
}
const User = mongoose.model('User',userSchema);

export {User};
