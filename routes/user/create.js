"use strict";

//Grab the packages we need
const mongoose = require('mongoose')

//Grab the models we need
const User = mongoose.model('User');

// create a user (accessed at GET http://localhost:3000/users)
let createUser = function(req, res) {
    
    // Assuming this is from a POST request and the body of the
    // request contained the JSON of the new "user" item to be saved
    let user = new User();    // create a new instance of the User  model
    
    user.firstName = req.body.firstName;
    user.middleName = req.body.middleName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    
    user.save((err, user) => {
        
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err)
        }

        // This user is the same one we saved
        // but after Mongo added its additional properties like _id. 
        res.status(200).send(user)

    });

}

module.exports = {
    create : createUser
}
