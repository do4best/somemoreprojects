const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const userSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true}
})
userSchema.pre('save',async function(next){
    const user = this;
    if (!user.isModified) return next();
    user.password = await bcrypt.hash(user.password,10);
    next();
})
const User = mongoose.model('User',userSchema);

module.exports = User;
