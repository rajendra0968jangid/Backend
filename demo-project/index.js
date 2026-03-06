const express = require("express")
const app = express()
const port = 4000;

// access backend from frontend
const cors = require("cors");
app.use(cors());

app.get('/',(req,res)=>{
    res.json({message:"data fetch successfully",data:{name:"kunal",email:"kunal@gmail.com"}})
})
app.post('/',(req,res)=>{
    res.send("hello api for post")
})
app.put('/',(req,res)=>{
    res.send("hello api for put")
})
app.delete('/',(req,res)=>{
    res.send("hello api for delete")
})

app.listen(port,()=>console.log("Server is running on port http://localhost:"+port));