const mongoose=require("mongoose");
let feedbackSchema=new mongoose.Schema({
     _id:mongoose.Schema.Types.ObjectId,
     Email: String,
     Feedback: String
})

module.exports= mongoose.model('feedback',feedbackSchema);