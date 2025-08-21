import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;
const clientSchema = new Schema(
    {firstName:String,
        lastName:String,
        username:{String,required:true},
        password:{String ,required:true}}
);
clientSchema.pre('save',async function(next){
    const client = this;
    if (!client.isModified) return next();
    let salt = await bcrypt.genSalt(10);
    client.password = await bcrypt.hash(client.password,salt);
    next();
})
clientSchema.methods.comparePassword = async function(candidatePassword){
    return bcrypt.compare(candidatePassword,this.password);
}
const Client = mongoose.model('Client',clientSchema);
export {Client};