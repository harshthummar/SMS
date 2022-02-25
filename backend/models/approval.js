const mongoose = require("mongoose");
let approvalSchema = new mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     Level: String,
     Tournament: String,
     Gender: String,
     Date: String,
     Venue: String,
     TeamName: String,
     Player1: String,
     Player2: String,
     Player3: String,
     Player4: String,
     Player5: String,
     Player6: String,
     Player7: String,
     Player8: String,
     Player9: String,
     Player10: String,
     Player11: String,
     Request: String
})

module.exports = mongoose.model('approval', approvalSchema);