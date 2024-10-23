module.exports.homePage = (req, res) => {
    return res.render('index');
}

module.exports.addAdminPage = (req, res) => {
    return res.render('./pages/add_admin');
}

module.exports.viewAdminPage = (req, res) => {
    return res.render('./pages/view_admin');
}