const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
//const bodyParser=require("body-parser");
//const jsonParser=bodyParser.json();

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const User = require("./models/users");
const Admin = require("./models/admins");
const Manager = require("./models/managers");
const Tournament = require("./models/tournaments")
const Winner = require("./models/winners");
const Feedback=require("./models/feedback")
const Approval = require("./models/approval");

// mongodb+srv://harsh:harsh@cluster0.ja51q.mongodb.net/LoginRegisterDb?retryWrites=true&w=majority
mongoose.connect("mongodb://harsh:harsh@cluster0-shard-00-00.ja51q.mongodb.net:27017,cluster0-shard-00-01.ja51q.mongodb.net:27017,cluster0-shard-00-02.ja51q.mongodb.net:27017/LoginRegisterDb?ssl=true&replicaSet=atlas-fddn0s-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(() => {
    console.warn("db connected");
}).catch((err)=>console.warn(err))

//Route
app.get('/getmanager', async function (req, res) {
    const a = await Manager.find();
    res.send({ user: a });
})

app.get('/getschedule', async function (req, res) {
    const a = await Tournament.find();
    res.send({ schedule: a });
})



app.get('/getapprove', async function (req, res) {
    const a = await Approval.find();
    res.send({ request: a });
})

app.get('/getstatus', async function (req, res) {
    const a = await Approval.find({Request:"accept"});
    res.send({ request: a });
})

app.get('/getwinner', async function (req, res) {
    const a = await Winner.find();
    res.send({ winner: a });
})

app.get('/getfeedback', async function (req, res) {
    const a = await Feedback.find();
    res.send({ feedback: a });
})


app.post('/login', async function (req, res) {
    const { email, password } = req.body;

    const a = await Admin.findOne({ Email: email }).exec();
    const b = await User.findOne({ Email: email }).exec();
    const c = await Manager.findOne({ Email: email }).exec();
    if (a != null && b == null && c == null) {
        if (password === a.Password) {
            res.send({ message: "Login Successfully For Admin", user1: a.Email, d: "1" });
        }
        else {
            res.send({ message: "Password didn't match" });
        }
    }
    else if (b != null && a == null && c == null) {
        if (password === b.Password) {
            res.send({ message: "Login Successfully For Student", user2: b.Email, d: "2" });
        }
        else {
            res.send({ message: "Password didn't match" });
        }
    }
    else if (c != null && a == null & b == null) {
        if (password === c.Password) {
            res.send({ message: "Login Successfully For Manager", user3: c.Email, d: "3" });
        }
        else {
            res.send({ message: "Password didn't match" });
        }
    }
    else {
        res.send({ message: "User not found" });
    }


})

app.post('/register', function (req, res) {
    const { uname, email, password } = req.body;
    User.findOne({ Email: email }, function (err, user) {
        if (user) {
            res.send({ message: "User Already Registered" });
        }
        else {

            const data = new User({
                _id: new mongoose.Types.ObjectId(),
                Uname: uname,
                Email: email,
                Password: password

            })
            data.save().then(() => {
                res.send({ message: "Successfully Registered" });
            }).catch((err) => {
                res.send(err);
            })


        }
    })

})


app.post('/addadmin', async function (req, res) {
    const { uname, email, password } = req.body;
    const a = await Admin.findOne({ Email: email }).exec();
    if (a) {
        res.send({ message: "User Already Added" });
    }
    else {

        const data = new Admin({
            _id: new mongoose.Types.ObjectId(),
            Uname: uname,
            Email: email,
            Password: password

        })
        data.save().then(() => {
            res.send({ message: "Successfully Added Admin" });
        }).catch((err) => {
            res.send(err);
        })


    }

})

app.post('/addmanager', async function (req, res) {
    const { uname,email, password } = req.body;
    const a = await Manager.findOne({ Email: email }).exec();
    if (a) {
        res.send({ message: "User Already Added" });
    }
    else {
            const data = new Manager({
                _id: new mongoose.Types.ObjectId(),
                Uname: uname,
                Email: email,
                Password: password

            })
            data.save().then(() => {
                res.send({ message: "Successfully Added Manager" });
            }).catch((err) => {
                res.send(err);
            })
        }

    

})

app.post('/addtournament', async function (req, res) {
    const { level, tournament, gender, date, venue } = req.body;
    const a = await Tournament.findOne({ Level: level, Tournament: tournament ,Gender:gender}).exec();
    if (a) {
        res.send({ message: "This entry are not valied" });
    }
    else {
        const data = new Tournament({
            _id: new mongoose.Types.ObjectId(),
            Level: level,
            Tournament: tournament,
            Gender: gender,
            Date: date,
            Venue: venue

        })
        data.save().then(() => {
            res.send({ message: "Successfully Add Tournament" });
        }).catch((err) => {
            res.send(err);
        })


    }

})

app.post('/deletetournament', async function (req, res) {
    const a = await Tournament.deleteOne({ _id:req.body.id}).exec();
    if(a)
    {
        
        const b = await Tournament.find();
        res.send({ message: "Tournament Deleted",schedule:b});
        
    }    
})

app.post('/updatetournament', async function (req, res) {
    const a = await Tournament.updateOne({ _id:req.body.id},{Level:req.body.l,Tournament:req.body.t,Gender:req.body.c,Date:req.body.d,Venue:req.body.v}).exec();
    if(a.modifiedCount===1)
    {
        const b = await Tournament.find();
        res.send({ message: "Tournament Updated",schedule:b});
        
    }    
})

app.post('/addwinner', async function (req, res) {
    const { level, tournament, category, date, venue, goldmedal, silvermedal, bronzemedal } = req.body;
    const a = await Winner.findOne({ Level: level, Tournament: tournament }).exec();
    if (a) {
        res.send({ message: "This entry are already added" });
    }
    else {
        const data = new Winner({
            _id: new mongoose.Types.ObjectId(),
            Level: level,
            Tournament: tournament,
            Category: category,
            Date: date,
            Venue: venue,
            GoldMedal: goldmedal,
            SilverMedal:silvermedal,
            BronzeMedal:bronzemedal

        })
        data.save().then(() => {
            res.send({ message: "Successfully Add Winner" });
        }).catch((err) => {
            res.send(err);
        })


    }

})

app.post('/request', async function (req, res) {
    const { level, tournament, category, date, venue,teamname,player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11} = req.body;
    const a = await Approval.findOne({ TeamName:teamname }).exec();
    if (a) {
        res.send({ message: "team name is already exists" });
    }
    else {
        const data = new Approval({
            _id: new mongoose.Types.ObjectId(),
            Level: level,
            Tournament: tournament,
            Gender: category,
            Date: date,
            Venue: venue,
            TeamName:teamname,
            Player1:player1,
            Player2:player2,
            Player3:player3,
            Player4:player4,
            Player5:player5,
            Player6:player6,
            Player7:player7,
            Player8:player8,
            Player9:player9,
            Player10:player10,
            Player11:player11,
            Request:"cancle"

        })
        data.save().then(() => {
            res.send({ message: "Successfully send request" });
        }).catch((err) => {
            res.send(err);
        })


    }

})

app.post('/updaterequest', async function (req, res) {
    
    const a = await Approval.updateOne({_id:req.body.id },{Request:req.body.value}).exec();
    // if (a) {
    //     a.save();   
    // }
    if(a.modifiedCount===1)
    {
        const b = await Approval.find();
        res.send({ message: "Request Updated",b:b});
        
    }    
})

app.post('/addfeedback', async function (req, res) {
        const data = new Feedback({
            _id: new mongoose.Types.ObjectId(),
            Email: req.body.email,
            Feedback:req.body.feedback
        })
        data.save().then(() => {
            res.send({ message: "Successfully Added Feedback" });
        }).catch((err) => {
            res.send(err);
        })

})

app.listen(5555, () => {
    console.warn("be started at port 5555");
})
