const mongoose=require('mongoose');

//schema design 
const userSchema = new mongoose.Schema({
name:{type:String,required:[true,'name is required']},
email:{type:String,required:[true,'name is required']},
password:{type:String,required:[true,'name is required']}
},{timestamps:true})

//export 
const userModel = mongoose.model('User',userSchema);
module.exports = userModel;
//model to bana liye ab kya 
//kye ye ban gya apne database me nhi 
//to iske liye routes aur controller banana hoga 