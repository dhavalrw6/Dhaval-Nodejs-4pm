// routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');
const Category = require('../models/Category');
const router = express.Router();

// Create Product
router.post('/', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect('/products');
});

// Get All Products
router.get('/', async (req, res) => {
    const products = await Product.find().populate('categoryId');
    const categories = await Category.find();
    res.render('products/index', { products, categories });
});

// Filter Products by Category
router.get('/category/:id', async (req, res) => {
    const products = await Product.find({ categoryId: req.params.id }).populate('categoryId');
    const categories = await Category.find();
    res.render('products/index', { products, categories });
});

// Edit Product
router.get('/:id/edit', async (req, res) => {
    const product = await Product.findById(req.params.id);
    const categories = await Category.find();
    res.render('products/edit', { product, categories });
});

// Update Product
router.put('/:id', async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/products');
});

// Delete Product
router.delete('/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
});

module.exports = router;