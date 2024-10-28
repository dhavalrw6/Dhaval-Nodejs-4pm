const { Router } = require("express");
const AdminPCtl = require('../controllers/admin-panelController');


// admin panel Router.
const ApRouter = Router();

ApRouter.get('/', AdminPCtl.homePage);
ApRouter.get('/add_admin', AdminPCtl.addAdminPage);
ApRouter.get('/view_admin', AdminPCtl.viewAdminPage);
ApRouter.get('/edit_admin/:id',AdminPCtl.editAdminPage)
module.exports = ApRouter;