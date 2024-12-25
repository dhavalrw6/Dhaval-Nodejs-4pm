const { default: mongoose } = require("mongoose");

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: String
})

const subCategoryModel = mongoose.model('subCategory', subCategorySchema);

module.exports = subCategoryModel;