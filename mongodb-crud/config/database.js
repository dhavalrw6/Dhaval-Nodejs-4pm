const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rw6dhavalpl:12345@cluster0.bp7fb.mongodb.net/')

const db = mongoose.connection

db.on('connected', (err) => {
    if (err) {
        console.log("database not connected..");
        return false;
    }
    console.log("database connected");
})

module.exports = db;