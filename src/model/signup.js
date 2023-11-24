const mongoose = require('mongoose');

const signSchema = new mongoose.Schema({
    userName:{
        type: Number,
        trim: true,
        required: true
    },
    Email:{
        type: String,
        trim: true,
        required: true
    },
    mobileNumber:{
        type: Number,
        trim: true,
        required: true
    },
    Gender:{
        type: String,
        trim: true,
        required: true
    },
    birthOfDate:{
        type: String,
        trim: true,
        required: true
    },
    City:{
        type: String,
        trim: true
    },
    State:{
        type: String,
        trim: true
    },
    Qulification:{
        type: String,
        trim: true
    },
    Password:{
        type: String,
        trim: true,
        required: true
    },
    confirmPassword:{
        type: String,
        trim: true,
        required: true
    },
    userImage:{
        type: String,
        default: "",
        trim: true,
        required: true
    }
});

module.exports = mongoose.model("user", signSchema);