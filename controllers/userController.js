const userModel = require('../models/userModel')


//login callback
const loginController = async(req,res) => {
    try {
        const {email,password}=req.body
       const user =  await userModel.findOne({email: email,password:password})

if(!user){
    return res.status(404).send({
        success:false,
        message:"user not found "
    }
    )
}
res.status(200).json(user)


    } catch (error) {
        console.log(error);
    }
}
//register callback 
const registerController = async(req,res) => {
    try {
        
        const newUser = new userModel(req.body)
        await newUser.save()
 
 res.status(201).json({
    success: true,
    newUser,
 })
   
    } catch (error) {
        res.status(400).json({
            sucess:false,
            error,
        })
    }
}
module.exports = {loginController,registerController}
