"use strict";

//grab the packages we need
const mongoose = require('mongoose');    // call mongoose

// create a schema
const userSchema = new mongoose.Schema ({

    firstName: String,
    middleName: String,
    lastName: String,
    email: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true},

})

// the schema is useless so far
// we need to create a model using it
module.exports = {        // make this available to our users in our Node applications
    User: userSchema
} 
