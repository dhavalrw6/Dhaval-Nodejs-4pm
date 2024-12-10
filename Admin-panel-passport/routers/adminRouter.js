const { Router } = require("express");
const AdminCtl = require("../controllers/adminController")
const { uploadImage } = require("../middlewares/adminMiddleware");
const passport = require("passport");

const adminRouter = Router();


// adminRouter.use(passport.AdminPassportAuth);
adminRouter.post('/add_admin', uploadImage, AdminCtl.addAdminData);
adminRouter.get('/delete-admin/:adminId', AdminCtl.deleteAdmin)
adminRouter.post('/edit_admin/:adminId', uploadImage, AdminCtl.editAdmin)
adminRouter.get('/logout', AdminCtl.logout);
adminRouter.get('/profile',AdminCtl.profilePage)


module.exports = adminRouter;