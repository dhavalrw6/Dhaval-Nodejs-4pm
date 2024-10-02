const mongoose = require('mongoose');


module.exports.db = async () => {
    try {
        await mongoose.connect('mongodb+srv://rw6dhavalpl:12345@cluster0.bp7fb.mongodb.net/book')
        console.log('connected to database')
    } catch (error) {
        console.log(error);
    }
}

