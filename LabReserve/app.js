// import Reserve from "./client/src/pages/Reserve";
var express = require('express');
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
var User = require('./models/User');
var Reserve = require('./models/Reserve');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var db = mongoose.connect('mongodb://localhost:27017/labreserve',function (err,respond) {
    if(err) console.log("there is error in connecting with mongodb");
    console.log('connect to the database')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/register', function (req, res) {
    // console.log(req.body.data.Email);
    var FirstName = req.body.data.FirstName;
    var LastName = req.body.data.LastName;
    var Email = req.body.data.Email;
    var Password = req.body.data.Password;

    var user = new User();
    user.FirstName = FirstName;
    user.LastName = LastName;
    user.Email = Email;
    user.Password = Password;

    user.save((err, result)=>{
        if(err){
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        return res.send({
            success: true,
            message: "User Registered Successfully"
        });
    })
});

app.post('/reserve', function (req, res) {
    // console.log(req.body.data.SubjectName);
    MongoClient.connect(url, function (err, db) {
        if(err) throw  err;
        var dbo = db.db("labreserve");
        var myobj = {SubjectName: req.body.data.SubjectName, SubjectCode: req.body.data.SubjectCode, StartingTime: req.body.data.StartingTime, EndingTime: req.body.data.EndingTime};
        // console.log(dataobj);
        dbo.collection("reservations").insertOne(myobj, function (err, res) {
            if (err) throw  err;
            db.close();
        });
    });

    // var SubjectName = req.body.data.SubjectName;
    // var SubjectCode = req.body.data.SubjectCode;
    // var StartingTime = req.body.data.StartingTime;
    // var EndingTime = req.body.data.EndingTime;
    //
    // var reserve = new Reserve();
    // reserve.SubjectName = SubjectName;
    // reserve.SubjectCode = SubjectCode;
    // reserve.StartingTime = StartingTime;
    // reserve.EndingTime = EndingTime;
    //
    // reserve.save((err, result)=>{
    //     if(err){
    //         return res.send({
    //             success: false,
    //             message: 'Error: Server error'
    //         });
    //     }
    //     return res.send({
    //         success: true,
    //         message: "Reservation is Successful"
    //     });
    // })
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});