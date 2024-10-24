const { Router } = require("express");
const AdminCtl = require('../controllers/adminController');
const { uploadImage } = require("../middlewares/adminMiddleware");

// admin panel Router.
const ApRouter = Router();

ApRouter.get('/', AdminCtl.homePage);
ApRouter.get('/add_admin', AdminCtl.addAdminPage);
ApRouter.post('/add_admin',uploadImage, AdminCtl.addAdminData);

ApRouter.get('/view_admin', AdminCtl.viewAdminPage);

module.exports = ApRouter;