const { Router } = require("express");
const uploadImage = require("../middlewares/uploadImage");
const subCategoryController = require('../controllers/subCategoryController');

const subCategoryRouter = Router();

subCategoryRouter.get('/add-subCategory', subCategoryController.addsubCategoryPage);
subCategoryRouter.post('/add-subCategory', uploadImage, subCategoryController.addsubCategory);

subCategoryRouter.get('/delete-subCategory/:id', subCategoryController.deletesubCategory);

subCategoryRouter.get('/update-subCategory/:id', subCategoryController.updatesubCategoryPage);
subCategoryRouter.post('/update-subCategory/:id', uploadImage, subCategoryController.updatesubCategory);

subCategoryRouter.get('/view-subCategory', subCategoryController.viewsubCategoryPage)

module.exports = subCategoryRouter;