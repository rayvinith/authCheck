const mongoose = require('mongoose')
const colors = require('colors')
const connectdb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
    console.log("successfully connected ");
    } catch (error) {
        console.log(error).bgRed;
    }
}
module.exports = connectdb