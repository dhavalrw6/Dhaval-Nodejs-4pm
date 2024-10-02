const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    price: Number,
    img: String,
})

const bookModle = mongoose.model('bookTbl', bookSchema);

module.exports = bookModle;