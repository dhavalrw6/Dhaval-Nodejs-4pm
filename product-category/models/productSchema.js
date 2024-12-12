const { default: mongoose } = require("mongoose");


const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    image: String,
    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;