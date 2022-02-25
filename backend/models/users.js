const mongoose=require("mongoose");
let userSchema=new mongoose.Schema({
     _id:mongoose.Schema.Types.ObjectId,
     Uname:String,
     Email:String,
     Password:String
})

module.exports= mongoose.model('users',userSchema);