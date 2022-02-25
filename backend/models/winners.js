const mongoose=require("mongoose");
let winnerSchema=new mongoose.Schema({
     _id:mongoose.Schema.Types.ObjectId,
     Level: String,
     Tournament: String,
     Category: String,
     Date: String,
     Venue: String,
     GoldMedal:String,
     SilverMedal:String,
     BronzeMedal:String

})

module.exports= mongoose.model('winners',winnerSchema);