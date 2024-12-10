
const Product = require("../models/productSchema");

module.exports.addProductPage = (req, res) => {
    return res.render('./pages/add-product');
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
        let products = await Product.find();
        console.log(products);
        return res.send(products);
        // return res.render('./pages/view-products', { products });
    } catch (error) {
        return res.json(error.message);
    }
}

module.exports.editProductPage = async(req,res)=>{
    try {
        let product = await Product.findOne({id:req.params.id});
        console.log(product);
        return res.send(product);
        // return res.render('edit-product',{product});        
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}

module.exports.editProduct =async(req,res)=>{
    try {
        if(req.file){
            req.body.image = req.file.path;
        }
        console.log(req.body,"\n from edit page",req.params.id);        
        await Product.findByIdAndUpdate(req.params.id,req.body);
        return res.json("Data update.");
        // return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error);
        return res.redirect( req.get('Referrer') || '/');
    }
}

module.exports.deleteProduct = async(req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        return res.json("Product Deleted..")
        // return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}