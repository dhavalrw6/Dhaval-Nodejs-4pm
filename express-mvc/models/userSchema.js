const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    phone: Number
})

const userModel = mongoose.model('usertbl', userSchema);

module.exports = userModel;