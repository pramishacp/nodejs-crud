"use strict";

//Grab the packages we need
const mongoose = require('mongoose')

//Grab the model we need
const User = mongoose.model('User');

// update a user (accessed at PUT http://localhost:3000/users/:userId)
let updateUser = function(req, res) {

    User.findById(req.params.userId, (err, user) => {  
        
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        } else {
            
            // Update each attribute with any possible attribute that may have been submitted in the body of the request
            // If that attribute isn't in the request body, default back to whatever it was before.
            user.firstName = req.body.firstName || user.firstName;
            user.middleName = req.body.middleName || user.middleName;
            user.lastName = req.body.lastName || user.lastName;
            user.email = req.body.email || user.email;
            user.password = req.body.password || user.password;
           
            // Save the updated document back to the database
            user.save((err, user) => {
                if (err) {
                    res.status(500).send(err)
                }
                res.status(200).send(user);
            }); 

        }

    });
    
}

module.exports = {
    update : updateUser
}
