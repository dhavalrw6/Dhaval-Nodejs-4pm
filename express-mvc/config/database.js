const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rw6dhavalpl:12345@cluster0.bp7fb.mongodb.net/user');

const db = mongoose.connection;

db.on('connected', (err) => {
    if (!err) {
        console.log("DataBase Connected.");

    }
})

module.exports = db;