const { Router } = require("express");
const uploadImage = require("../middlewares/uploadImage");
const categoryController = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.get('/add-category', categoryController.addCategoryPage);
categoryRouter.post('/add-category', uploadImage, categoryController.addCategory);

categoryRouter.get('/delete-category/:id',categoryController.deleteCategory);

categoryRouter.get('/update-category/:id',categoryController.updateCategoryPage);
categoryRouter.post('/update-category/:id',uploadImage,categoryController.updateCategory);

categoryRouter.get('/view-category',categoryController.viewCategoryPage)

module.exports = categoryRouter;