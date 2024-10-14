const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    img: String
})

const product = mongoose.model('productTbl', productSchema);

module.exports = product;