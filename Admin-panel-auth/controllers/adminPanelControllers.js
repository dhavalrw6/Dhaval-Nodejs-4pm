const product = require("../models/productSchema");

module.exports.homePage = (req, res) => {
    return res.render('index');
}

module.exports.formBasicPage = (req, res) => {
    return res.render('form-basic');
}

module.exports.tablePage = async (req, res) => {
    try {
        let data = await product.find({});

        if (data.length === 0) {

            return res.redirect('/form-basic');
        }
        return res.render('tables', {
            data
        });
    } catch (error) {
        console.log(error);
    }
}

