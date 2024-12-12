const categoryModel = require("../models/categorySchema");
const subCategoryModel = require("../models/subCategorySchema");

module.exports.addsubCategoryPage = async (req, res) => {
    let categorys = await categoryModel.find();
    return res.render('./pages/add-subCategory', { categorys });
}

module.exports.addsubCategory = async (req, res) => {
    try {
        // add category in database.
        if (req.file) {
            req.body.image = req.file.path;
        }
        await subCategoryModel.create(req.body);
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}

module.exports.deletesubCategory = async (req, res) => {
    try {
        let { id } = req.params;
        await subCategoryModel.findByIdAndDelete(id);
        console.log('category deleted');
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}

module.exports.updatesubCategoryPage = async (req, res) => {
    try {
        let { id } = req.params;
        let category = await subCategoryModel.findOne({ id })
        return res.render('./pages/update-subCategory', { category });
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}

module.exports.updatesubCategory = async (req, res) => {
    try {
        let { id } = req.params;
        if (req.file) {
            req.body.image = req.file.path;
        }
        await subCategoryModel.findByIdAndUpdate(id, req.body);
        console.log('category deleted');
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}

module.exports.viewsubCategoryPage = async (req, res) => {
    try {
        let subCategorys = await subCategoryModel.find({}).populate('categoryId');
        console.log("all data fatch.");
        return res.send(subCategorys)
        // return res.render('./pages/view-category');
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}
