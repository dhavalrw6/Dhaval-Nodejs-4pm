const userModel = require("../models/userSchema")

module.exports.homePage = (req, res) => {
    return res.render('home');
}

module.exports.createData = async (req, res) => {
    try {
        let data = await userModel.create(req.body);
        console.log("Data successfully Created.");
        return res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
}

module.exports.viewPage = async (req, res) => {
    try {
        let data = await userModel.find({});
        console.log(data);
        return res.render('view', { data });
    } catch (error) {
        return res.render('view');
    }
}

module.exports.deleteData = async (req, res) => {
    try {
        let { id } = req.params;
        await userModel.findByIdAndDelete(id)
        console.log("data Deleted.");
        return res.redirect('back')
    } catch (error) {
        console.log(error);
        return res.redirect('back')
    }
}