const { default: mongoose } = require("mongoose");


const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    date: { type: Date, default: Date.now }
})

const blogs = mongoose.model('blogsTbl',blogSchema);

module.exports = blogs;