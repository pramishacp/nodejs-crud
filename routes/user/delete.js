"use strict";

//Grab the packages we need
const mongoose = require('mongoose')

//Grab the models we need
const User = mongoose.model('User');

// delete a user (accessed at DELETE http://localhost:3000/users/:userId)
let deleteUser = function(req, res) {

    //The "user" in this callback function represents the document that was found.
    // It allows to pass a reference back to the client in case they need a reference for some reason.
    User.findByIdAndRemove(req.params.userId, (err, user) => {  
       
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        }

        res.status(200).send(user);

    });

}

module.exports = {
    delete : deleteUser
};
