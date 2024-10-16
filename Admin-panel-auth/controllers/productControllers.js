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

module.exports.deleteData = async (req, res) => {
    try {
        let { id } = req.params;
        await product.findByIdAndDelete(id);
        console.log("data Deleted.");
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    }
}

module.exports.editPage = async (req, res) => {
    try {
        let { id } = req.params;
        let productData = await product.findById(id);
        return res.render('edit-user', { productData });
    } catch (error) {
        console.log(error);
        return res.render('edit-user', { productData });
    }
}

module.exports.editData = async (req, res) => {
    try {
        let { id } = req.params;
        await product.findByIdAndUpdate(id, req.body);
        console.log("Data Updated..");
        return res.redirect('/tables');
    } catch (error) {
        console.log(error);
        return res.redirect('/tables');
    }
}