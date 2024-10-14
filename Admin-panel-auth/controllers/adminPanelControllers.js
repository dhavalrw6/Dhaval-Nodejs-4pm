const product = require("../models/productSchema");
const User = require("../models/userSchema");

module.exports.homePage = (req, res) => {
    return res.render('index');
}

module.exports.formBasicPage = (req, res) => {
    return res.render('form-basic');
}

module.exports.tablePage = async (req, res) => {
    try {
        let data = await product.find({});
        return res.render('tables', {
            data
        });
    } catch (error) {
        console.log(error);
    }
}

