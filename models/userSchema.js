const mongoose=require("mongoose")


const userSchema=mongoose.Schema({
    name:String,
    Email:String,
    Password:String,
    PhoneNumber:Number 
})


const User=mongoose.model("user",userSchema)
module.exports=User