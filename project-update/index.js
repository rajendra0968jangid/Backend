const express = require("express")
const app = express();

//frontend access to backend
const cors = require("cors")
app.use(cors())

//dotenv import
require("dotenv").config();

//db import from connection.js 
const {Db,User} = require("./connection")
Db();

// body parser 
app.use(express.urlencoded())
app.use(express.json())

//get type api for teacher
// user signup 
app.post("/",async(req,res)=>{
    const data = req.body;
    const newUser = await User.create({name:data.name,email:data.email,password:data.password,phone:data.phone})
    const userData = await newUser.save()
    res.json({message:"User created successfully",data:userData});
})
//user data fetch db
app.get("/",(req,res)=>{
    res.send("Ready for get")
})
//account update
app.put("/",(req,res)=>{
    res.send("Ready for put")
})
//account delete
app.delete("/",(req,res)=>{
    res.send("Ready for delete")
})

//get type api for student
// app.get("/student/signup",(req,res)=>{
//     res.send("Ready for student")
// })

app.listen(process.env.PORT,()=>console.log('project running on:'+process.env.PORT))

//User -> data entry -> createAt | updatedAt | deletedAt -> null -> date
//soft delete
//hard delete

// createdAt
// updatedAt
// deletedAt