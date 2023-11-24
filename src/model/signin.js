const mongoose = require('mongoose');

const signinSchema = new mongoose.Schema({
    userName:{
        type: String,
        trim: true,
        required: true
    },
    Password:{
        type: String,
        trim: true,
        required: true
    }
})