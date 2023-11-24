const { error } = require('console');
const mongoose = require('mongoose');
const {MONGO_URL} = process.env;

exports.connect = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true
    }).then(() => {
        console.log('Succesfully connected to database');
    }).catch((error) => {
        console.log('Database connection failed. exit now........');
        console.log(error);
        process.exit(1);
    });
};