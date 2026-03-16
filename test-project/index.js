const express = require("express");
const app = express();
// import express from "express"
//express
//nodemon -> restart
//cors -> access 
//body-parser -> 
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
// parse application/json
app.use(bodyParser.json())
app.post("/:id/:rollno",(req,res)=>{
    console.log(req.body)
    console.log(req.params.id);
    console.log(req.params.rollno);
    console.log(req.query.page);
    console.log(req.query.phone);
    res.send("hello postman post")
})
app.put("/",(req,res)=>{
    res.send("hello postman put")
})
app.delete("/",(req,res)=>{
    res.send("hello postman delete")
})
app.listen(4000)