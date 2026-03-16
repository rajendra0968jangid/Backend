const express = require("express")
const app = express();

//import cors 
const cors = require("cors");
app.use(cors())
//body-parser
app.use(express.json());

//create get api
app.get("/",(req,res)=>{
    res.send("Backend project is working");
})
//import mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rajendra0968jangid:Rajendra0968@cluster0.wyu84.mongodb.net/myproject")
mongoose.connection.on('connected', () => console.log('connected'));

//collection-> table
const schemaSignup = new mongoose.Schema({
  name: String,
  email:String,
  password:String
});

const Signup = mongoose.model('Signup', schemaSignup);
const bcrypt = require("bcrypt");
//post api
app.post("/signup",async(req,res)=>{
    const data = req.body;
    //password cross check
    if(data.password != data.confirmPassword){
        return res.status(400).json({message:"Password Mis-match",data:null})
    }
    //data-base 
    const hashed = await bcrypt.hash(data.password,10);
    const newUser = await Signup.create({name:data.name,email:data.email,password:hashed});
    const User = await newUser.save();
    res.status(201).json({message:"user signup successfully",data:User})
})

// dot env import
require('dotenv').config()
const port = process.env.PORT
app.listen(port)