const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    image : String    
})

const categoryModel = mongoose.model('category',categorySchema);

module.exports = categoryModel;