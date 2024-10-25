const admin = require("../models/adminSchema");

module.exports.addAdminData = async (req, res) => {
    try {

        if (req.file) {
            req.body.image = req.file.path;
        }

        req.body.name = req.body.fname + ' ' + req.body.lname;

        await admin.create(req.body);
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    }
}

module.exports.deleteAdmin = async (req, res) => {
    try {
        let { adminId } = req.params;
        await admin.findByIdAndDelete(adminId);
        console.log("Admin Deleted..");
        return res.redirect('/view_admin')
    } catch (error) {
        console.log(error);
        return res.redirect('/view_admin')
    }
}