const mongoose = require("mongoose");


async function Db(){
    mongoose.connect(process.env.MONGODB)
    mongoose.connection.on('connected',()=>console.log('connected'));
}

const userSchema = mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    phone:String,
    password:String
})

const User = mongoose.model("User",userSchema);

module.exports = {Db,User};



//sql | no sql 
//orm | odm 
//sequilize | mongoose
