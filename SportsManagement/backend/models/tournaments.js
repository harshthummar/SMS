const mongoose=require("mongoose");
let tournamentSchema=new mongoose.Schema({
     _id:mongoose.Schema.Types.ObjectId,
     Level: String,
     Tournament: String,
     Gender: String,
     Date: String,
     Venue: String
})

module.exports= mongoose.model('tournaments',tournamentSchema);