'use strict';

//Grab the packages we need
const mongoose = require('mongoose');

//Grab the model we need
const User = mongoose.model('User');

// read all the users (accessed at GET http://localhost:3000/users)
let readAllUser = function(req, res) {

    User.find((err, users) => {  
        
        if (err) {
            // Note that this error doesn't mean nothing was found,
            // it means the database had an error while searching, hence the 500 status
            res.status(500).send(err)
        } else {
            // send the list of all users
            res.status(200).send(users);
        }
        
    });
}

module.exports = {
    readAll : readAllUser
}
