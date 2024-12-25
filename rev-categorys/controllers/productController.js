
const categoryModel = require("../models/categorySchema");
const Product = require("../models/productSchema");
const subCategoryModel = require("../models/subCategorySchema");

module.exports.addProductPage = async (req, res) => {
    let categorys = await categoryModel.find();
    let subCategorys = await subCategoryModel.find();
    return res.render('./pages/add-product', {
        categorys, subCategorys
    });
}

module.exports.addProduct = async (req, res) => {
    try {
        console.log(req.file);
        console.log(req.body);
        if (req.file) {
            req.body.image = req.file.path;
        }
        await Product.create(req.body);
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}

module.exports.viewProductPage = async (req, res) => {
    try {
        let products = await Product.find({});
        console.log(products);
        let findCat = null;
        // return res.json(products);
        return res.render('./pages/view-products', { products, findCat });
    } catch (error) {
        return res.json(error.message);
    }
}

module.exports.editProductPage = async (req, res) => {
    try {
        let product = await Product.findOne({ id: req.params.id });
        console.log(product);
        return res.send(product);
        // return res.render('edit-product',{product});        
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}

module.exports.editProduct = async (req, res) => {
    try {
        if (req.file) {
            req.body.image = req.file.path;
        }
        console.log(req.body, "\n from edit page", req.params.id);
        await Product.findByIdAndUpdate(req.params.id, req.body);
        return res.json("Data update.");
        // return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}

module.exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        return res.json("Product Deleted..")
        // return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}


module.exports.viewProduct = async (req, res) => {
    try {
        let products = await Product.find({}).populate('categoryId').populate('subCategoryId');
        console.log(products);
        let findCat = null;
        return res.json(products);
    } catch (error) {
        return res.json(error.message);
    }
}