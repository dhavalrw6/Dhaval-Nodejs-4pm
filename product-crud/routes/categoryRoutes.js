// routes/categoryRoutes.js
const express = require('express');
const Category = require('../models/Category');
const router = express.Router();

// Create Category
router.post('/', async (req, res) => {
    const category = new Category(req.body);
    await category.save();
    res.redirect('/categories');
});

// Get All Categories
router.get('/', async (req, res) => {
    const categories = await Category.find();
    res.render('categories/index', { categories });
});

module.exports = router;