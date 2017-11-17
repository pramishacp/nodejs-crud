"use strict";

//Grab the packages we need
const mongoose = require('mongoose')

//Grab the model we need
const User = mongoose.model('User');

// read a user (accessed at GET http://localhost:3000/users/userId)
let readUser = function(req, res) {
    
    // Common RESTful way to get the Id is from the url params in req.params
    User.findById(req.params.userId, (err, user) => {
        
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err)
        }

        if (user) {
            res.status(200).send(user)
        } else {
            res.status(404).send("No User found with that ID")
        }

    });

}

// export the module to make available to the user.
module.exports = {
    read : readUser
}
