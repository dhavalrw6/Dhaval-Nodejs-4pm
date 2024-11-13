const { Router } = require("express");
const blogCtl = require('../controllers/blogController')

const blogRouter = Router();

blogRouter.get('/add_blog', blogCtl.add_blogPage);
blogRouter.get('/view_blog', blogCtl.view_blogPage);
blogRouter.post('/add_blog',blogCtl.add_blog)

module.exports = blogRouter;