const express = require('express')
const cors=require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors=require('colors')
const { connect } = require('mongoose')
const connectdb = require('./config/db')
const path=require("path");
//config dot env file
dotenv.config();

//database configuration
connectdb();
const app=express()
//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*', function(req,res){
res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

//routes
app.get('/test', (req,res)=>{
res.send("heloo wolrd this was a test route")
})
app.use('/api/v1/user',require('./routes/userRoute'))

//port
const PORT=8080 || process.env.PORT 

//listen server 
app.listen(PORT, ()=>{
console.log(`server running on ${PORT} successfully`)
})