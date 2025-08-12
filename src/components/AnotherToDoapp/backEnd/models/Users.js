import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const {Schema} = mongoose;
const userSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true}

});
userSchema.pre('save', async function(next){
    const user = this;
    if (!user.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});
userSchema.methods.comparePassword = async function(candidatePassword){
    return bcrypt.compare(candidatePassword, this.password);
}
const User = mongoose.model('MyUser', userSchema);
export {User};
