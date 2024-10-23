const { Router } = require("express");
const AdminCtl = require('../controllers/adminController')

// admin panel Router.
const ApRouter = Router();

ApRouter.get('/', AdminCtl.homePage);
ApRouter.get('/add_admin', AdminCtl.addAdminPage);
ApRouter.get('/view_admin', AdminCtl.viewAdminPage);

module.exports = ApRouter;