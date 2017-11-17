"use strict";

//grab the packages we need
let express = require('express');        // call express
let mongoose = require('mongoose');       // call mongoose
let bodyParser = require('body-parser');    // call body-parser

mongoose.connect('mongodb://localhost:27017/crud'); // connect to our database

// configure app to use bodyParser()
// this will let us get the data from a POST
let app = express();    // define our app using express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//grab all the models
mongoose.model('User', require('./models/user').User);

// more routes for our API will happen here
// User Routes
app.post('/users',require('./routes/user/create').create);    // create a user 
app.get('/users', require('./routes/user/readAll').readAll);    // all users
app.get('/users/:userId', require('./routes/user/read').read);    //read a user
app.put('/users/:userId', require('./routes/user/update').update);    //update a user  
app.delete('/users/:userId', require('./routes/user/delete').delete);    //delete a user      

//Start the server
app.listen(3000);
console.log("API runs on port 3000");


