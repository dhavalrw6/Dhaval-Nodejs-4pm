const categoryModel = require("../models/categorySchema");

module.exports.addCategoryPage = (req, res) => {
    return res.render('./pages/add-category');
}

module.exports.addCategory = async (req, res) => {
    try {
        // add category in database.
        if (req.file) {
            req.body.image = req.file.path;
        }
        await categoryModel.create(req.body);
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}

module.exports.deleteCategory = async (req, res) => {
    try {
        let { id } = req.params;
        await categoryModel.findByIdAndDelete(id);
        console.log('category deleted');
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}

module.exports.updateCategoryPage = async (req, res) => {
    try {
        let { id } = req.params;
        let category = await categoryModel.findOne({ id })
        return res.render('./pages/update-category', { category });
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}

module.exports.updateCategory = async (req, res) => {
    try {
        let { id } = req.params;
        if (req.file) {
            req.body.image = req.file.path;
        }
        await categoryModel.findByIdAndUpdate(id, req.body);
        console.log('category deleted');
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}

module.exports.viewCategoryPage = async (req, res) => {
    try {
        let categorys = await categoryModel.find({});
        console.log("all data fatch.");
        return res.send(categorys);
        // return res.render('./pages/view-category');
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}
