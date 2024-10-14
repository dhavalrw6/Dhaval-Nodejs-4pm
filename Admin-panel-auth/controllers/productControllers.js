const product = require("../models/productSchema")

module.exports.create = async (req, res) => {
    try {
        await product.create(req.body);
        console.log("New Product Created.");
        return res.redirect('/form-basic');
    } catch (error) {
        console.log(error);
        return res.redirect('/form-basic');
    }
}