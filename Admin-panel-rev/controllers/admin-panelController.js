const admin = require("../models/adminSchema");

module.exports.homePage = (req, res) => {
    return res.render('index');
}

module.exports.addAdminPage = (req, res) => {
    return res.render('./pages/add_admin');
}

module.exports.viewAdminPage = async (req, res) => {
    try {
        let data = await admin.find({});
        return res.render('./pages/view_admin', { data });
    } catch (error) {
        console.log(error);
        return res.render('./pages/view_admin');
    }
}

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