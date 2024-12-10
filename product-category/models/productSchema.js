const { default: mongoose } = require("mongoose");


const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    image: String,
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;