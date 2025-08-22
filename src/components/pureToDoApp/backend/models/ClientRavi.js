import mongoose from "mongoose";
import bcrypt from "bcrypt";
import mongose from "mongoose";
const {Schema} = mongose
const clientSchema = new Schema({
        firstName:String,
        lastName:String,
        username:{type:String,required:true},
        password:{type:String ,required:true}}
);
clientSchema.pre('save',async function(next){
    const client = this;
    if (!client.isModified('password')) return next();
    let salt = await bcrypt.genSalt(10);
    client.password = await bcrypt.hash(client.password, salt);
    next();
})
clientSchema.methods.comparePassword = async function(candidatePassword){
    return bcrypt.compare(candidatePassword,this.password);
}
const Client = mongoose.model('OurClient',clientSchema);
export {Client};