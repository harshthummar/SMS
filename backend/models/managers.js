const mongoose=require("mongoose");
let managerSchema=new mongoose.Schema({
     _id:mongoose.Schema.Types.ObjectId,
     Uname:String,
     Email:String,
     Password:String
})

module.exports= mongoose.model('managers',managerSchema);