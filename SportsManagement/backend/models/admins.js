const mongoose=require("mongoose");
let adminSchema=new mongoose.Schema({
     _id:mongoose.Schema.Types.ObjectId,
     Uname:String,
     Email:String,
     Password:String
})

module.exports= mongoose.model('admins',adminSchema);