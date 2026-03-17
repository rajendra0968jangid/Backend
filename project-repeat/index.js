const express = require("express");
const app = express();

// import dotenv 
require("dotenv").config()

app.get("/",(req,res)=>{
    res.send("Ready");
})

app.listen(process.env.PORT,()=>console.log("Project running on:"+process.env.PORT))