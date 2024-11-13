const blogs = require("../models/blogSchema");

module.exports.add_blogPage = (req, res) => {
    return res.render('./pages/add_blog');
}

module.exports.view_blogPage = async (req, res) => {
    try {
        let data = await blogs.find({});
        return res.render('./pages/view_blog', { data });
    } catch (error) {
        console.log(error);
        return res.render('./pages/view_blog');
    }
}

module.exports.add_blog = async (req, res) => {
    try {
        await blogs.create(req.body);
        console.log("blog created.");
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    }
}