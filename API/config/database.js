const { default: mongoose } = require("mongoose")


const db = async()=>{
    try {
        await mongoose.connect('mongodb+srv://rw6dhavalpl:12345@cluster0.bp7fb.mongodb.net/');
        return console.log("Connected to MongoDB");
    } catch (error) {
        return console.log("database not connected.");
        
    }
}

module.exports = db;