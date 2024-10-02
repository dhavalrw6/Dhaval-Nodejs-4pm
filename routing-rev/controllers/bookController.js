const bookModle = require("../models/bookSchema");

module.exports.homePage = (req, res) => {
    return res.render('home');
}

module.exports.aboutPage = (req, res) => {
    return res.render('about');
}

module.exports.createData = async (req, res) => {
    try {
        await bookModle.create(req.body);
        console.log("Data added..");
    } catch (error) {
        console.log(error);
    }
}