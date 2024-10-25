const { Router } = require("express");
const AdminCtl = require("../controllers/adminController")
const { uploadImage } = require("../middlewares/adminMiddleware");

const adminRouter = Router();

adminRouter.post('/add_admin', uploadImage, AdminCtl.addAdminData);
adminRouter.get('/delete-admin/:adminId',AdminCtl.deleteAdmin)


module.exports = adminRouter;